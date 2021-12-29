import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModule } from './loginModule';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginModule("", "");
  submitted = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    
  }
  login(email:any,password: any){
    if (this.submitted == true){
      sessionStorage.setItem("loggin_email",email);
      sessionStorage.setItem("loggin_passw",password);
      this.router.navigate(["directory"]);
    }
   
  }

}
