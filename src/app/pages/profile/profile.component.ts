import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { GetUser } from './state/profile.action';
import { ProfileState } from './state/profile.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  @Select(ProfileState.userProfile) userProfile$!: Observable<UserProfile>;
  userId! :number;
  constructor(private store:Store,private router:Router) {  }

  ngOnInit() {
    this.userProfile$.subscribe(userProfileData => {
    this.userId = userProfileData.id});
    this.store.dispatch(new GetUser(this.userId));
    this.router.navigate(['/profile']);
  }
 }


