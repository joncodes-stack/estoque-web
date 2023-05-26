import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder) { }

  onSubmitLoginForm(){
    console.log("Dados do formulario de login", this.loginForm.value)
  }

  onSubmitSignupForm(){
    console.log("Dados do formulario de criação de conta", this.signupForm.value)
  }


  ngOnInit() {
  }

}
