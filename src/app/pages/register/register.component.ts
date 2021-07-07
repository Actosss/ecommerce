import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    email: ['',[Validators.required, ]],
    password: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;
  roles: string[] = [];
  constructor(private formBuilder: FormBuilder,
              private registerService :RegisterService,
              private router :Router) { }

  ngOnInit(): void {
  }
  register() : void {
    const { email, password, username }= this.registerForm.value;
    this.registerService.register(email, password, username).subscribe(
      data  => {
        console.log(data);
        this.isSuccessful = true;
        this.router.navigate(['login']);
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
