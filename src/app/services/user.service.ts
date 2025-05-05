import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'https://reqres.in/api';
  http = inject(HttpClient);
  headers: any = { "x-api-key": "reqres-free-v1" }

  constructor() { }
  getUsers():Observable<any>{
    return this.http.get(`${this.url}/users?per_page=10`,{headers: this.headers}).pipe(
      map((data:any) => data.data)
    );
  }
  getUserById(id:string):Observable<any>{
    return this.http.get(`${this.url}/users/${id}`,{headers: this.headers}).pipe(
      map((data:any) => data.data)
    );
  }
}
