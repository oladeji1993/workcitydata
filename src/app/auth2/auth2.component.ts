import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification/notification.service';


@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.css']
})
export class Auth2Component implements OnInit {
  
  signupForm!: FormGroup;
  public submitted = false;  
  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private SpinnerService: NgxSpinnerService,
    private router: Router,
    private notifyService : NotificationService 
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  
  get formControl() {
    return this.signupForm.controls;
  }

  registerUser(){
    this.submitted = true;
    // const staff_id = "AS-2021"
    // if(staff_id == this.signupForm.value)
    if(this.signupForm.invalid){
      return;
    }else{
    this.SpinnerService.show();
    this.auth.registerUser(this.signupForm.value)
    .subscribe((data:any) =>{
      this.SpinnerService.hide();
      console.log(data)
      this.router.navigate(['/login'])
      this.notifyService.showSuccess(data.message, "Success")
    }, err=>{
      this.SpinnerService.hide();
      let error = err.error
      this.notifyService.showError(error.message, "Error")
    })
    }
  }


}
