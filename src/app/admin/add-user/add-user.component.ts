import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { RegisterService } from 'src/app/services/registration/register.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  memberForm!: FormGroup;
  public submitted = false;   

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private registerService: RegisterService,
    private notifyService: NotificationService,
    private router: Router,
    private SpinnerService: NgxSpinnerService,
  ) { }

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
          this.router.navigate(['/admin'])
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
