import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GetUsersService } from './../../services/getUsers/get-users.service';
import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  sideBarOpen: boolean = false;
  term!: string;
  Members:any = [];
  SD : any = []
  VO : any = []
  PO : any = []
  p: number = 1;
  fullname:any
  constructor(
    private getUsersService: GetUsersService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  toggleSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
    this.sideBarOpen = true;
  }

  removeSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
    this.sideBarOpen = false;
  }


  loadUsers(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      if(info){
        console.log(info)
       this.Members = info.members
       this.SD = info.SD
       this.PO = info.PO
       this.VO = info.VP
      console.log(this.Members)
      }
    }, err =>{
      console.log(err)
    })

  }


  getVirtualPlan(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      this.Members = info.VP
    })
  }


  getSharedPlan(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      this.Members = info.SD
    })
  }

  getPrivatePlan(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      this.Members = info.PO
    })
  }

  getTotalUser(){
    this.getUsersService.getMembers().subscribe((info:any)=>{
      this.Members = info.members
    })
  }


}
