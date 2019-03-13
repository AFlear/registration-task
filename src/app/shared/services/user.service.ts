import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  public rootUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }


  public getUsers(page:number){
    return this.http.get(`${this.rootUrl}/?_page=${page}&_limit=3`)
  }
  public addUser(data:any) {
    return this.http.post(`${this.rootUrl}`,data)
  }
  public getUserById(id:number){
    return this.http.get(`${this.rootUrl}/${id}`)
  }

}
