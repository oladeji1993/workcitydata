import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _memberUrl = "https://api.hiltonparkerng.com/admin/addmember"
  constructor(
    private http : HttpClient,
  ) { }


  registerMember(user:any){
    return this.http.post(this._memberUrl, user)
  };
  
}
