import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient) { }


  adminLogin(data:any){
    return this.http.post('http://localhost:5000/admin/login', data)
  }
  addStudent(data:any){
    return this.http.post('http://localhost:5000/students/addstudent',data)
  }
  get(){
    return this.http.get('http://localhost:5000/students/studentslist')
  }
  updatestudent(id:any,data:any){
    return this.http.put('http://localhost:5000/students/updatestudents/'+id,data)
  }
  deletestudent(id:any){
    return this.http.delete('http://localhost:5000/students/deletestudents/'+id)
  }
}