import { DeleteModalComponent } from './../delete-modal/delete-modal.component';
import { EditModalComponent } from './../edit-modal/edit-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetUsersService } from 'src/app/services/getUsers/get-users.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  term!: string;
  Members:any = [];
  response: any;
  // SD : any = []
  // VO : any = []
  // PO : any = []
  p: number = 1;
  fullname:any
  constructor(
    private getUsersService: GetUsersService,
    public dialog: MatDialog,
    private messenger: MessengerService,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }


  
  loadUsers(){
    this.spinner.show()
    this.getUsersService.getMembers().subscribe((info:any)=>{
      if(info){
        console.log(info)
       this.Members = info.members
      //  this.SD = info.SD
      //  this.PO = info.PO
      //  this.VO = info.VP
      this.spinner.hide()
      console.log(this.Members)
      }
    }, err =>{
      console.log(err)
    })

  }

  
  openDialog(Member: any){
    this.dialog.open(EditModalComponent,{height:'500px',width:'800px'});
    this.response = Member;
    console.log(this.response)
    this.messenger.send.next(this.response)
    this.messenger.resource = this.response
  }

  Delete(){
    this.dialog.open(DeleteModalComponent,{height:'280px',width:'600px'});
  }


}
