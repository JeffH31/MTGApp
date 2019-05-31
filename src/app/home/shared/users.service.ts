import { Injectable } from '@angular/core';
import { User } from 'backend/models/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User []>();

  constructor(private http: HttpClient) { }

  addUser(firstName: string, lastName: string, username: string, password: string, email: string) {
    const user: User = { id: null, firstName, lastName, username, password, email };
    console.log('in addUser from user.service ' + user)
    this.http.post<{ message: string, userId: string }>('http://localhost:3000/api/users', user);
  }
}
