import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

const header = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8888/api/users/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl + 'create', user);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + `find/${id}`, header);
  }

  public create(producto: User): Observable<any> {
    return this.http.post<any>(this.usersUrl + 'nuevo', producto, header);
  }

  public edit(producto: User, id: number): Observable<any> {
    return this.http.put<any>(this.usersUrl + `update/${id}`, producto, header);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.usersUrl + `${id}`, header);
  }
}
