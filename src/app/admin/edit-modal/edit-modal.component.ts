import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  UserData! : any
  constructor(
    private messenger: MessengerService
  ) { }

  ngOnInit(): void {
    this.getDetails()
  }


  getDetails(){
    console.log("here")
     this.UserData = this.messenger.resource
    console.log(this.UserData)
  }

  



}
