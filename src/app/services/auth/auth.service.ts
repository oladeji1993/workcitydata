import { StorageService } from '../storage/storage.service';
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
    private router: Router,
    private storageService: StorageService
  ) { }



  registerUser(user:any){
    return this.http.post(this._registerUrl, user)
  };

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  loginUser(user:any){
    return this.http.post(this._loginUrl, user)
  };

  get(item: any) {
    let value = localStorage.getItem(item);
    value = ((value === undefined) || (value === "undefined") ) ? null: value;
    return JSON.parse(value!);
  }

  // set(item: string, object: Object) {
  //   localStorage.setItem(item, JSON.stringify(object))
  // }

  // removeItem(item: any) {
  //   localStorage.removeItem(item)
  // }

  // clear() {
  //   localStorage.clear();
  // }


  doLogout() {
    this.storageService.clearCurrentUser()
    this.router.navigate(['/login'])
  }

  loggedIn(){
    return this.storageService.getAccessToken()
  }

}
