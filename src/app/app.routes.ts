import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SkillXchangeComponent } from '../skill-xchange/skill-xchange.component';

export const routes: Routes = [
  { path: '', component: SkillXchangeComponent },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'signUp', component: SignupComponent, data: { animation: 'signUp' } }
];
