import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


   loginForm!: FormGroup;
   public submitted = false;                                                                                
  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) { }

  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }) 
    
  }

  get formControl() {
    return this.loginForm.controls;
  }

  token:any
  loginUser() : void{
      this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }else{
          this.SpinnerService.show();
          this.auth.loginUser(this.loginForm.value)
          .subscribe((data:any) =>{
              console.log(data)
              if(data){
                this.token = data.token;
                localStorage.setItem('token',  JSON.stringify(this.token));
                this.SpinnerService.hide();
                this.router.navigate(['/register2'])
              }else{
                this.router.navigate(['/auth'])
              }
        })
      }

    // if(this.loginForm.valid){
      //  this.SpinnerService.show();
      // this.auth.loginUser(this.loginForm.value)
      // .subscribe((data:any) =>{
      //   console.log(data)
      //   if(data){
      //     this.token = data.token;
      //     localStorage.setItem('token',  JSON.stringify(this.token));
      //     this.SpinnerService.hide();
      //     this.router.navigate(['/register2'])
      //   }else{
      //     this.router.navigate(['/auth'])
      //   }
      // },
      // );
    // }
    
  
  
  }



}
