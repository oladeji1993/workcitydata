import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {


  private fetchMembers = "https://api.hiltonparkerng.com/admin/members"
  private fetchStatus = "https://api.hiltonparkerng.com/status"
  // private fetchplan = `https://api.hiltonparkerng.com/admin/filter?filterby = ${plan}`
  constructor(
    private http : HttpClient,
  ) { }


  getMembers(){
    return this.http.get(this.fetchMembers)
  }

  getStatus(){
    return this.http.get(this.fetchStatus)
  }


}
