import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { Login } from './state/auth.action';
import { AuthState } from './state/auth.state';
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
  @Select(AuthState.loggedInUser)loggedInUser$!: Observable<User>;

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private store :Store) {}

  ngOnInit() {
  }

  login():void {
    const credendials= this.loginForm.value;
    this.store.dispatch(new Login(credendials)).subscribe((data) => {
      this.router.navigate(['/home']);
   });
}
  reloadPage(): void {
    window.location.reload();
  }
}
