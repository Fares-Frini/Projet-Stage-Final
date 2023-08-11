import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/axios.service';
import {HeaderComponent} from 'src/app/main-page/header/header.component';
interface gender {
  value: string;
  viewValue: string;
}
 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  
})
 
export class AuthComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  gender: string = "" ;
  dob: Date | undefined ;
  auth: any;
  componentToShow: String ="welcome";
  constructor(
    private formbuilder : FormBuilder,
    private axiosService: AxiosService,
    private router: Router,
     
  ) { }
  
  ngOnInit(): void {
    
  }
   loginForm = this.formbuilder.group(
    {
      email:[''],
      password: [''] 

    }
    
   );
   RegisterForm = this.formbuilder.group(
    {
      fname:[''],
      lname:[''],
      gender:[''],
      dob:[''],
      email:[''],
      password: [''] ,
      role : ['user']
    }
    
   );
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }  
  genders: gender[] = [
    {value: 'Male', viewValue: 'male'},
    {value: 'Female', viewValue: 'female'}
  ];

  
  onLogin(): void {
    
    this.axiosService.request(
      "POST",
      "/login",
      {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
     
        this.router.navigate(['/bibliotheque/home']).then(() => 
        {
            
        
        });
       
       
    }).catch(
      error => {
          alert("mot de passe incorrect")
      }
      );
  } 
  onRegister(): void {

    this.axiosService.request(
      "POST",
      "/register",
      {
        email: this.RegisterForm.value.email,
        password: this.RegisterForm.value.password,
        fname: this.RegisterForm.value.fname,
        lname: this.RegisterForm.value.lname,
        gender: this.RegisterForm.value.gender,
        dob: this.RegisterForm.value.dob,
        role: this.RegisterForm.value.role
      }
    ).then(
      response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "messages";
      }).catch(
      error => {
          this.axiosService.setAuthToken(null);
          this.componentToShow = "welcome";
      }
  );
  }
}


