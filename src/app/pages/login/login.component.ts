import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/tokenStorage/tokenStorageService';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password:  ['', [Validators.required]]
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;
  roles: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private loginService : LoginService,
              private tokenStorage:TokenStorageService,
              private router:Router) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login() : void {
    const  {  password,username }= this.loginForm.value;
    this.loginService.login(username,password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log(data)
        this.router.navigate(['profile']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
