import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/class/Recipe';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/class/User';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  myRecipe:Recipe;
  name;
  u;
  us: string;
  flag: boolean = false;
  constructor(public ser: UserServiceService, public router: Router, public active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(suc => {
      this.name = suc["recipeName"];
      this.ser.findRecipe(this.name).subscribe(suc => { this.myRecipe = suc; this.u = suc["UserName"];  console.log(this.myRecipe);
    });
     

    })

  }
  mydelails() {
    this.us = sessionStorage.getItem("userNow");
    if (this.us == this.u) {
       this.flag=true;
       this.router.navigate(["editRecipe/" + this.myRecipe.NameRecipe]);
    }
    else {
      alert("אינך בעל המתכון!!!")
    this.flag=false;
    }

  }
}
