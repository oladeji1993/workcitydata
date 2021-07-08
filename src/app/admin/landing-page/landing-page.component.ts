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

  Members:any = [];
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
       this.Members = info.members
      console.log(this.Members)
      }
    }, err =>{
      console.log(err)
    })

  }


}
