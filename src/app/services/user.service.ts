import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  // this method is used to retrieve all github users
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // this method is used to retrieve  the user by its name
  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${username}`);
  }
}
