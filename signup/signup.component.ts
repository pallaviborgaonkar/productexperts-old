import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  frmSignUp: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.frmSignUp = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]*$/),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      ]),
      pwd: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }
  submitFormData() {
    if (this.frmSignUp.valid) {
      console.log(this.frmSignUp.value);
      alert('Signup successfull');
      this.frmSignUp.reset(); //;
      this.router.navigate(["signup"]);
   
    }
  }

}
