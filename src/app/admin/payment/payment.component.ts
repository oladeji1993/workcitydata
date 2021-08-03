import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/getUsers/get-users.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private getUsersService: GetUsersService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
    this.getStatus()
  }


  
  loadUsers(){
    this.spinner.show()
    this.getUsersService.getMembers().subscribe((info:any)=>{
      if(info){
        console.log(info)
       this.Members = info.members
       this.spinner.hide()
      //  this.SD = info.SD
      //  this.PO = info.PO
      //  this.VO = info.VP
      // console.log(this.Members)
      }
    }, err =>{
      this.spinner.hide()
      console.log(err)
    })

  }


  getStatus(){
    this.spinner.show()
    this.getUsersService.getStatus().subscribe((data:any) =>{
      if(data){
        this.inactive = data.inactive
        this.active = data.active
        this.due = data.due 
        this.spinner.hide()
      }
      console.log(data)
    })
  }

  getActive(){
    this.spinner.show()
    this.getUsersService.getStatus().subscribe((data:any) =>{
      if(data){
        this.Members = data.active 
        this.spinner.hide()
      }
      console.log(data)
    })
  }

  getDue(){
    this.spinner.show()
    this.getUsersService.getStatus().subscribe((data:any) =>{
      if(data){
        this.Members = data.due 
        this.spinner.hide()
      }else{
        this.spinner.hide()
        console.log(data)
      }
    })
  }

  getInactive(){
    this.spinner.show()
    this.getUsersService.getStatus().subscribe((data:any) =>{
      if(data){
        this.Members = data.inactive
        this.spinner.hide()
      }else{
        this.spinner.hide()
        console.log(data)
      }
    })
  }



}
