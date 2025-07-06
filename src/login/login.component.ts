import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private formbuilder: FormBuilder) { }

  loginform: any;

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username:['',Validators.required],
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
