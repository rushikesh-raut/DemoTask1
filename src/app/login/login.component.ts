import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private fb:FormBuilder , private service : CommanService ,private route :Router) { }
  
  ngOnInit(): void {
  }
  form=this.fb.group({
    username:[''],
    password:['']
  })
  onSubmit() {
let username =this.form.value.username;
let password =this.form.value.password;
let userdeta = this.service.getfun()
let Verifieduser = userdeta.filter((el:any )=>{
  if(el.username == username && el.password == password) return el
  })
if(Verifieduser.length == 1){
  sessionStorage.setItem('Active','ture')
  alert('login succsesfully')
  this.route.navigate(['Demo'])
}else if (Verifieduser == undefined || Verifieduser == null || Verifieduser.length==0){
  sessionStorage.setItem('Active','false')
  alert('login faild')
}
  }
  logout(){
    sessionStorage.clear()
  }
}