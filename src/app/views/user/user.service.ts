import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = 'https://api.github.com/users/';

  public user: User = new User();

  constructor(private httpClient: HttpClient) { }

  getUser(userName) {
    return this.httpClient.get(`${this.urlUser}${userName}`);
  }
}
