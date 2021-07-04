import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
    .subscribe(data =>{
      console.log(data)
      this.SpinnerService.hide();
    })
    }
  }


}
