import { Injectable} from "@angular/core";
import {User} from "../model/User"
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:'root'})
export class UserService{
  private url:string;
  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:8080/api/authenticate';
  }
  login(user:User){
    return this.httpClient.post<User>(this.url,user);

  }

}
