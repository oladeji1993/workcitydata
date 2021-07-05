import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "https://api.hiltonparkerng.com/auth/register";
  private _loginUrl = "https://api.hiltonparkerng.com/auth/login";
  constructor(
    private http : HttpClient,
    private router: Router
  ) { }



  registerUser(user:any){
    return this.http.post(this._registerUrl, user)
  };

  getToken() {
    return localStorage.getItem('token');
  }

  loginUser(user:any){
    return this.http.post(this._loginUrl, user)
  };

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['auth']);
    }
  }

  loggedIn(){
    return localStorage.getItem('token')
  }

}
