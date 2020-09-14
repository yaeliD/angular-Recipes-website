import { Component, OnInit } from '@angular/core';
import { User } from 'src/class/User';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  u:User=new User();
  constructor(public ser:UserServiceService,public router:Router) { }

  ngOnInit() {
  }
  addUser()
{
  this.ser.AddUser(this.u).subscribe(suc=>{
    if(suc==false)alert("משתמש קיים/תפוס");
    else
    {alert("נרשמת בהצלחה!");this.router.navigate(["login"]);}});

}
}
