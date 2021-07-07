import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  getPass(){
    this.submitted = true;
    console.log(this.accessForm.value)
  }

}
