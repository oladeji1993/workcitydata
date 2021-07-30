import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/getUsers/get-users.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  term!: string;
  Members:any = [];
  // SD : any = []
  // VO : any = []
  // PO : any = []
  p: number = 1;
  fullname:any
  constructor(
    private getUsersService: GetUsersService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }


  
  loadUsers(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      if(info){
        console.log(info)
       this.Members = info.members
      //  this.SD = info.SD
      //  this.PO = info.PO
      //  this.VO = info.VP
      console.log(this.Members)
      }
    }, err =>{
      console.log(err)
    })

  }


}
