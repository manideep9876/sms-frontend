import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Component } from '@angular/core';

export const routes: Routes = [{path:"",component:LoginComponent} ,
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent }];
