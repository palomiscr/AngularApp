import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.URL_API);
  }
  createUser(user: User) {
    return this.http.post(this.URL_API, user);
  }
  deleteUser(_id: string) {
    return this.http.delete(this.URL_API + "/"+ _id);
  }
  updateUser(_id: string, user:User) {
    return this.http.put(this.URL_API + "/" + _id, user);
  }
}
