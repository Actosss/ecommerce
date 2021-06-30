import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) { }

  private USER_PROFILE = 'http://localhost:8080/api/user/userProfile/';

  getUser(id:number):Observable<UserProfile>{
    return this.httpClient.get<UserProfile>(this.USER_PROFILE + id);
  }

}
