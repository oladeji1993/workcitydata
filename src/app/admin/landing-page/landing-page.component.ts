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

  Members:any = [];
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
       this.Members = info.members
      console.log(this.Members)
      }
    }, err =>{
      console.log(err)
    })

  }



  search(){
    if(this.fullname == ""){
      this.ngOnInit()
    }else{
      this.Members = this.Members.filter((resp:any )=>{
        return resp.fullname.toLocaleLowerCase().match(this.fullname.toLocaleLowerCase());
      })
    }
  }


}
