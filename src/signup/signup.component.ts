import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: any

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({

      firstname : ['',  Validators.compose([Validators.required   , 
                        Validators.pattern(/^[a-zA-Z ]+$/)])
                  ]                                               ,

      lastname  : ['',  Validators.compose([Validators.required   ,
                        Validators.pattern(/^[a-zA-Z ]+$/)])   
                  ]                                               ,

      email     : ['',  Validators.compose([Validators.required   , 
                        Validators.email])
                  ]                                               ,
                  
      password  : ['',  Validators.required]                      

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
