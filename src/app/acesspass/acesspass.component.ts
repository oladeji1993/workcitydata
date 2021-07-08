import { RegisterService } from 'src/app/services/registration/register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-acesspass',
  templateUrl: './acesspass.component.html',
  styleUrls: ['./acesspass.component.css']
})
export class AcesspassComponent implements OnInit {
  accessForm!: FormGroup;
  public submitted = false;   

  constructor(
    public fb: FormBuilder,
    private regService: RegisterService,
    private router: Router,
    private SpinnerService: NgxSpinnerService,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.accessForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get formControl() {
    return this.accessForm.controls;
  }

  back(){
    this.router.navigate(['/home'])
  }

  getPass(){
    this.submitted = true;
    if(this.accessForm.invalid){
      return;
    }else{
      this.SpinnerService.show();
      this.regService.accessPass(this.accessForm.value)
      .subscribe((info:any) =>{
        if(info){
          console.log(info)
          this.SpinnerService.hide();
          this.accessForm.reset()
          this.router.navigate(['/home'])
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
  }

