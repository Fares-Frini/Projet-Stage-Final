import { Component, OnInit,AfterViewInit,ViewChild, Input, Output, EventEmitter,Inject } from '@angular/core';
import { UserDataService } from '../services/User-service/user-data.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
 import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { AxiosService } from '../axios.service';
import { FormBuilder } from '@angular/forms';
 export interface User {
  id : number;
  fname: string;
  lname: string;
  email: string;
  password : string;
  dob : number;
  gender : string;
  role: string;
  books: [];
}

var ELEMENT_DATA: User[] = [ ];

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit,AfterViewInit{
  
  @ViewChild(MatTable)
  table!: MatTable<User>; 
  
  displayedColumns: string[] = ['id', 'fname', 'lname','email','role','gender','dob','books','action'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  source = [...ELEMENT_DATA];
  selection = new SelectionModel<User>(true, []); 
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
    myData: any;
  constructor(private userDataService: UserDataService, public dialog: MatDialog, private axiosService : AxiosService ) {}

    ngOnInit(): void {
    this.userDataService.getData().subscribe((data) => {
      this.myData = data;
      ELEMENT_DATA=this.myData;
      
 
      this.dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
      
    });
     
  }
    openAdd(): void {
      const dialogRef = this.dialog.open(AddContentDialog);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
  openEdit(id : number,firstName:string,lastname:string,email:string,gender:string,role:string,dob:number): void {
    var d = new Date(dob)
    const dialogRef = this.dialog.open(editUserDialog, {
      data: {
        id:id,
        firstName:firstName,
        lastname:lastname,
        email:email,
        gender:gender,
        role:role,
        dob:d
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
     

}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  close(): void {
    const blackElement = document.getElementById("black");
    const openElement = document.getElementById("open");
    if (blackElement) {
      blackElement.style.display = "none";
    }
    openElement?.classList.add("hidden");
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelUser(id : number):void
  {
     this.userDataService.delData(id);
     window.location.reload();
  }
  
}

@Component({
  selector: 'AddContentDialog',
  templateUrl: 'AddContentDialog.html',
  styleUrls : ['AddContentDialog.scss'],
})
export class AddContentDialog {
  constructor(private formbuilder : FormBuilder, private axiosService: AxiosService){}
  addUserForm = this.formbuilder.group(
    {
      fname:[''],
      lname:[''],
      gender:[''],
      dob:[''],
      email:[''],
      password: [''] ,
      role : ['']
    })
  onAddUser():void
  {
    this.axiosService.post("POST","http://localhost:8080/user",this.addUserForm.value)
  }
  
}
@Component({
  selector: 'editUserDialog',
  templateUrl: 'editUserDialog.html' ,
  styleUrls:['AddcontentDialog.scss']
  })
  export class editUserDialog implements OnInit{
    id:number=0;
    constructor(private formbuilder :FormBuilder,@Inject(MAT_DIALOG_DATA)public data: any,private axiosService : AxiosService, private dialog:MatDialogRef<editUserDialog> ){}
    /* @Input() id :string; */
  ngOnInit(): void {
    console.log(this.data);
  }
  
  UsereditForm = this.formbuilder.group(
    {
      id: this.data.id ,
      fname:[''],
      lname:[''],
      gender:[''],
      dob:[''],
      email:[''],
      password: [''] ,
      role : ['']
    })
    onEditUser()
    {
      
       this.axiosService.post("PUT","http://localhost:8080/user",this.UsereditForm.value).then(()=>
       {
        this.dialog.close();
        window.location.reload();
       })
    
    }
  }