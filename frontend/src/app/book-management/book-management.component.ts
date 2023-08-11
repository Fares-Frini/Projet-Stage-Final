import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BookDataService } from '../services/book-service/book-data.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import { AxiosService } from '../axios.service';
import { Target } from '@angular/compiler';
import { HttpClient, HttpResponse } from '@angular/common/http';
export interface Book {
  id: number;
  name: string;
  author: string;
  category: string;
  price: number,
  sales: number,
  promotion: number,
  dou: number,
  file: [],
  image: []
}

var ELEMENT_DATA: Book[] = [

];

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})


export class BookManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'author', 'category', 'price', 'sale', 'promotion', 'change cover image', 'Download', 'action'];
  dataSource = new MatTableDataSource<Book>(ELEMENT_DATA);
  selection = new SelectionModel<Book>(true, []);
  constructor(private bookDataService: BookDataService, public dialog: MatDialog) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  myData: any;
  ngOnInit(): void {
    this.bookDataService.getData().subscribe((data) => {
      this.myData = data;
      ELEMENT_DATA = this.myData;
      this.dataSource = new MatTableDataSource<Book>(ELEMENT_DATA);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onDelBook(id: number) {
    this.bookDataService.delData(id);
    window.location.reload();
  }
  openAdd(): void {
    const dialogRef = this.dialog.open(AddBookDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }
  openEdit(): void {
    const dialogRef = this.dialog.open(editBookDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }
  openEditImg(id:number): void {
    const dialogRef = this.dialog.open(editImageDialog, {
      data: {
        id:id,
         
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDownloadFile(id: number):object {
     return this.bookDataService.getFile(id).subscribe((response)=>
     {
        let blob: Blob=response.body as Blob;
        let url=window.URL.createObjectURL(blob)
        window.open(url);
     })
     
  }

}

@Component({
  selector: 'AddBookDialog',
  templateUrl: 'addBookDialog.html',
  styleUrls: ['AddBookDialog.scss'],
})
export class AddBookDialog implements OnInit {
  url = "../assets/images/bookDefault.png"
  name: string | null = "";
  file: any;
  img: any;
  ngOnInit(): void {


  }
  constructor(private formbuilder: FormBuilder, private axiosService: AxiosService, private http: HttpClient) { }
  addBookForm = this.formbuilder.group(
    {
      name: [''],
      author: [''],
      category: [''],
      price: [''],
      image: { "fk_img_id": 0 },
      file: { "fk_file_id": 0 }
    }
  )
  onAddBook() {

    let formdatafile = new FormData();
    let formdataImage = new FormData();
    formdatafile.set("pdf", this.file);
    formdataImage.set("image", this.img);
    this.http.post<HttpResponse<any>>("http://localhost:8080/upload", formdatafile,{observe:"response"}).subscribe((response:HttpResponse<any>) => {
      console.log(response)
      this.addBookForm.patchValue({image: { "fk_img_id": response.body.id as number}}) ;
      this.http.post<HttpResponse<any>>("http://localhost:8080/image", formdataImage,{observe:"response"}).subscribe((response:HttpResponse<any>) => {
        this.addBookForm.patchValue({file: { "fk_file_id": response.body.id as number}}) ; 
        this.http.post("http://localhost:8080/book", this.addBookForm.value).subscribe(() => {
            window.location.reload();
        })
        console.log(this.addBookForm.value);
      })
    })
  }
  imageChange(event: any): void {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      this.img = event.target.files[0];
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }

  }
  getFile(event: any) {
    this.file = event.target.files[0]
    console.log("file", this.file);
  }

}

@Component({
  selector: 'editBookDialog',
  templateUrl: 'editBookDialog.html',
  styleUrls: ['AddBookDialog.scss']
})
export class editBookDialog implements OnInit {

  ngOnInit(): void {

  }

}
@Component({
  selector: 'editImageDialog',
  templateUrl: 'editImageDialog.html',
  styleUrls: ['AddBookDialog.scss']
})
export class editImageDialog implements OnInit {
  img: any;
  
  url = "../assets/images/bookDefault.png";
  constructor(private bookDataService : BookDataService,@Inject(MAT_DIALOG_DATA)public data: any,private http : HttpClient, private FormData:FormBuilder){}
  ngOnInit(): void {
    this.imageGet();
  }
  
  imageGet(): void {
    this.bookDataService.getImg(this.data.id).subscribe((response)=>
    {
      let blob: Blob=response.body as Blob;
      var reader = new FileReader();
      reader.readAsDataURL(blob)
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    })
  }
  imageChange(event: any): void {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      this.img = event.target.files[0];
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }

  }
  onSubmitImgChange()
  {
    let formdataImageChange = new FormData();
    formdataImageChange.set("image", this.img);
    
    this.http.post<HttpResponse<any>>("http://localhost:8080/image", formdataImageChange,{observe:"response"}).subscribe((response)=>
    {
      
    })
  }
}


