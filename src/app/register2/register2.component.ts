import { RegisterService } from './../services/registration/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  memberForm!: FormGroup;
  public submitted = false;   

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private registerService: RegisterService,
    private notifyService: NotificationService,
    private router: Router,
    private SpinnerService: NgxSpinnerService,
  ) {
    
   }

  ngOnInit(): void {
    
    this.memberForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      amount: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
      businessname: ['', [Validators.required]],
      plan: ['', [Validators.required]],
      businessprofile: ['']
      
    })
    
    
  }
  get formControl() {
    return this.memberForm.controls;
  }

  regMember(){
    this.submitted = true
    if(this.memberForm.invalid){
      return;
    }else{
      this.SpinnerService.show();
      this.registerService.registerMember(this.memberForm.value)
      .subscribe((info:any) =>{
        if(info){
          console.log(info)
          this.SpinnerService.hide();
          this.memberForm.reset()
          this.router.navigate(['/register2'])
          this.notifyService.showSuccess(info.message, "Success")

        }
      },err =>{
        this.SpinnerService.hide();
        console.log(err)
        let error = err.error
        this.notifyService.showError(error.message, "Error")
      })

    }
  }

  logOut(){
    this.authService.doLogout()
  }



}
