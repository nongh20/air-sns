import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders;
  private accessPointUrl: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    // Get all user data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public getById(id) {
    // Get all user data
    return this.http.get(this.accessPointUrl + '/' + id, { headers: this.headers });
  }

  public add(user) {
    return this.http.post(this.accessPointUrl, user, { headers: this.headers });
  }

  register(user) {
    return this.http.post(`${this.accessPointUrl}/register`, user);
  }

  public remove(user) {
    return this.http.delete(this.accessPointUrl + '/' + user.id, { headers: this.headers });
  }

  public update(user) {
    return this.http.put(this.accessPointUrl + '/' + user.id, user, { headers: this.headers });
  }
}
