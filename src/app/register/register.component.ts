import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  Editregisterform!: FormGroup;
  manideep: any;
  sid: any;
  userImg!: File;

  constructor(private fb: FormBuilder, private api: AdminService, private router: Router) { }
  ngOnInit(): void {
    this.registerform = this.fb.group({
      fullname: ['', Validators.required],
      fathername: ['', Validators.required],
      class: ['', Validators.required],
      mobileno: ['', Validators.required],
      place: ['', Validators.required],
      dob: ['', Validators.required],
      section: ['', Validators.required],
      uploadphoto: ['', Validators.required]
    });


    this.Editregisterform = this.fb.group({
      fullname: [''],
      fathername: [''],
      class: [''],
      mobileno: [''],
      place: [''],
      dob: [''],
      section: [''],
      uploadphoto: ['']
    });

    this.api.getStudents().subscribe((res: any) => {
      this.manideep = res;
      console.log(res)
    })
  }

  selectFile(r: any) {
    this.userImg = r.target.files[0] as File;
    console.log(this.userImg, 'user photo');

  }


  register() {

    let regData = new FormData();
    regData.append('uploadphoto', this.userImg)
    regData.append('fullname', this.registerform.value.fullname),
      regData.append('fathername', this.registerform.value.fathername),
      regData.append('mobileno', this.registerform.value.mobileno),
      regData.append('class', this.registerform.value.class),
      regData.append('place', this.registerform.value.place),
      regData.append('dob', this.registerform.value.dob),
      regData.append('section', this.registerform.value.section),


      this.api.addStudent(regData).subscribe((res: any) => {
        console.log(res);

        // window.location.reload()

      })
  }
  editUser(s: any) {
    console.log(s, 'm');
    this.sid = s._id;
    console.log(this.sid)

    this.Editregisterform.patchValue({
      fullname: s.fullname,
      fathername: s.fathername,
      class: s.class,
      mobileno: s.mobileno,
      place: s.place,
      dob: s.dob,
      section: s.section
    })

  }
  updateUser() {
    this.api.updatestudent(this.sid, this.Editregisterform.value).subscribe((res: any) => {
      console.log(res)
      window.location.reload()
    })
  }
  delete(d: any) {
    let sant = d._id
    console.log(sant)
    this.api.deletestudent(sant).subscribe((res: any) => {
      console.log(res)
      window.location.reload()
    })
  }

}
