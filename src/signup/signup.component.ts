import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: any

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({

      name      : ['', Validators.required]                     ,
      email     : ['', Validators.compose([Validators.required, 
                      Validators.email])
                  ]                                             ,
      address   : ['', Validators.required]                     ,
      mobileno  : ['', Validators.compose([Validators.required                      ,
                      Validators.pattern('[0-9]{10}')])  
                  ]                                             ,
      age       : ['', Validators.compose([Validators.required,
                      Validators.min(20),Validators.max(50)])
                  ]                                             ,
      gender    : ['', Validators.required]

    })
  }

  submitForm()
  {
       if (this.signupForm?.valid) {
      console.log('Form data:', this.signupForm.value);
    }
    else{
      this.signupForm.markAllAsTouched()
      console.log('Form data:', this.signupForm.value);
    }
  }

}
