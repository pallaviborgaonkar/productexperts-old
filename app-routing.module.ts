import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WhatItIsComponent } from './what-it-is/what-it-is.component';


const routes: Routes = [
  {
    path:"what-it-is",
    component: WhatItIsComponent
  },
  {
    path:"how-it-works",
    component: HowItWorksComponent
  },
  {
    path:"directory",
    component: DirectoryListComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"**",
    component: DirectoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
