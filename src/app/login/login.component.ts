import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  adminloginForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: AdminService, private route: Router) { }


  ngOnInit(): void {
    this.adminloginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }



  login() {
    this.api.adminLogin(this.adminloginForm.value).subscribe((res: any) => {
      console.log('res', res);
      this.route.navigate(['/register'])
    })
  }
}
