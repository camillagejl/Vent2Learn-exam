import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// const baseUrl = 'http://localhost:8080/api/users';
const baseUrl = 'https://vent2learn-node.herokuapp.com/api/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}


