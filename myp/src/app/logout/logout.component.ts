import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router:Router,public ser:UserServiceService) { }
 us:string;
  ngOnInit() {
  }
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
