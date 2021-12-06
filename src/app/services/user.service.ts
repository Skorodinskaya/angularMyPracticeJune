import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getUser():Observable<IUser>{
    return this.httpClient.get<IUser>(`${urls.users}/id`)
  }
}
