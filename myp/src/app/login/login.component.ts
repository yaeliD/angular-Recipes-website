import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { User } from 'src/class/User';
import { UserServiceService } from '../user-service.service';
import { Recipe } from 'src/class/Recipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
u:User=new User();
arr:User[]=[];
  constructor(public router:Router,public ser:UserServiceService ) { }
  
  ngOnInit() {
  }
  getAllUsers()
  {
    this.ser.gettAllUser().subscribe(suc=>{this.arr=suc;},err=>{alert("errrrrror");console.log(err);});
    console.log(this.arr);
  }
  
  checkUser(){
this.ser.findUser(this.u).subscribe(suc=>{
  //found 
  sessionStorage.setItem("userNow", this.u.UserName)
 if(suc==true){alert("ברוכים הבאים");this.router.navigate(["All-Recipos"]); 
 sessionStorage.setItem('userNow',this.u.UserName);sessionStorage.setItem('user_password',this.u.Password.toString());}
 //not found
  else if(suc==false){alert("אינך קיים במערכת");this.router.navigate(["register"]);}
  //password not correct
  else{alert("סיסמה שגויה:");}
})
  }
  
}
