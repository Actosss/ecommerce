import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { Logout } from '../login/state/auth.action';
import { AuthState } from '../login/state/auth.state';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Select(AuthState.loggedInUser)loggedInUser$!: Observable<User>;

  constructor(private store:Store, private router: Router ){ }

  ngOnInit(): void {

  }

  logout() {
    this.store.dispatch(new Logout());
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
