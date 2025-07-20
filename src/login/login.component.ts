import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private formbuilder: FormBuilder) { }

  loginform: any;

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })
  }

  Onsubmit()
  {
    if(this.loginform.valid)
    {
      console.log("Form Value",this.loginform.value);
    }
    else
    {
      this.loginform.markAllAsTouched();
      console.log("Form Value",this.loginform.value);
    }
  }


}
