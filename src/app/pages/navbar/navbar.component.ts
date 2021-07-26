import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { Logout } from '../login/state/auth.action';
import { AuthState } from '../login/state/auth.state';
import { CleanUser, GetUser } from '../profile/state/profile.action';
import { ProfileState } from '../profile/state/profile.state';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Select(AuthState.loggedInUser)loggedInUser$!: Observable<User>;
  @Select(ProfileState.userProfile) userProfile$!: Observable<UserProfile>;
  constructor(private store:Store, private router: Router ){ }
  userId! :number;
  ngOnInit(): void {

  }
  logout() {
    this.store.dispatch(new Logout());
    this.store.dispatch(new CleanUser())
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
