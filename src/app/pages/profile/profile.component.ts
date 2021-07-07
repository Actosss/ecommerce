import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { AuthState } from '../login/state/auth.state';
import { GetUser } from './state/profile.action';
import { ProfileState } from './state/profile.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  @Select(ProfileState.userProfile) userProfile$!: Observable<UserProfile>;
  @Select(AuthState.loggedInUser) loggedInUser$!:Observable<User>;
  userId! :number;
  constructor(private store:Store,private router:Router) {  }

  ngOnInit() {
    this.loggedInUser$.subscribe(userProfile => {
    this.userId = userProfile.id});
    this.store.dispatch(new GetUser(this.userId));
    this.router.navigate(['/profile']);
  }
 }


