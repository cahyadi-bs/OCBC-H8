import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string = 'http://localhost:4000/api';
  headers= new HttpHeaders().set('Content-Type','application/json');
  currentUser: {name:string,email:string,_id:string} = {name:'', email:'', _id:''}

  constructor(private http:HttpClient, private router:Router) { }

  //SignUp
  signUp(user: User): Observable<any>{
    let api = `${this.endpoint}/register-user`;
    return this.http
          .post(api,user)
          .pipe( catchError(this.handleError))
  }

  //SignIn
  signIn(user:User){
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res:any)=> {
        localStorage.setItem('access-token', res.token)
        this.getUserProfile(res._id).subscribe((res:any) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' + res.msg._id]);
        })
      })
  }

  //User Profile
  getUserProfile(id:any): Observable<any>{
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, {headers: this.headers})
      .pipe(
        map((res:any) =>{
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  //Error Handling
  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      //client-side error
      msg = error.error.message;
    } else {
      //server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(msg);
  }

  //Get Token
  getToken(){
    return localStorage.getItem('access_token');
  }

  get isLoggedIn():boolean{
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false; 
  }
}
