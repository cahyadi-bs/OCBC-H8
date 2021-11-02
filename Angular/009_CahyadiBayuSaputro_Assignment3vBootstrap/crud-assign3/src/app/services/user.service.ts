import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint:string = 'http://localhost:4000'

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    const api = `${this.endpoint}/users`
    return this.http.get(api)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(user:User): Observable<any> {
    const api = `${this.endpoint}/users`
    return this.http.post(api,user)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  find(id:number): Observable<any> {
    const api = `${this.endpoint}/users/${id}`
    return this.http.get(api)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, user:User): Observable<any> {
    const api = `${this.endpoint}/users/${id}`
    return this.http.put(api, user)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    const api = `${this.endpoint}/users/${id}`
    return this.http.delete(api)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error : HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
    }
}
