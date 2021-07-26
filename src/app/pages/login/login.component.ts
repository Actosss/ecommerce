import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { GetUser } from '../profile/state/profile.action';
import { ProfileState } from '../profile/state/profile.state';
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
  @Select(ProfileState.userProfile)userProfile$!: Observable<UserProfile>;
  userId!:number;
  constructor(private formBuilder: FormBuilder,private router:Router,private store :Store) {}
  ngOnInit() {
  }
  login():void {
    const credendials= this.loginForm.value;
    this.store.dispatch(new Login(credendials)).subscribe(() => {
      this.router.navigate(['/home']);
    })
    this.loggedInUser$.subscribe( data => {
      this.userId =data.id;
   });
    this.store.dispatch(new GetUser(this.userId));
}
  reloadPage(): void {
    window.location.reload();
  }
}
