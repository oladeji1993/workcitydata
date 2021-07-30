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
  inactive: any  = []
  due : any = []
  active : any = []
  // PO : any = []
  p: number = 1;
  fullname:any
  constructor(
    private getUsersService: GetUsersService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
    this.getStatus()
  }


  
  loadUsers(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      if(info){
        console.log(info)
       this.Members = info.members
      //  this.SD = info.SD
      //  this.PO = info.PO
      //  this.VO = info.VP
      // console.log(this.Members)
      }
    }, err =>{
      console.log(err)
    })

  }


  getStatus(){
    this.getUsersService.getStatus().subscribe((data:any) =>{
      if(data){
        this.inactive = data.inactive
        this.active = data.active
        this.due = data.due 
      }
      console.log(data)
    })
  }

  getActive(){
    this.getUsersService.getStatus().subscribe((data:any) =>{
      if(data){
        this.active = data.active 
      }
      console.log(data)
    })
  }



}
