import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/class/Recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-short-recipe',
  templateUrl: './short-recipe.component.html',
  styleUrls: ['./short-recipe.component.css']
})
export class ShortRecipeComponent implements OnInit {
  @Input()
  myRecipeNow: Recipe;
  link;
  r:Recipe= new Recipe();
  constructor(public router: Router) { }

  ngOnInit() {
    
    if (sessionStorage.getItem('userNow'))
  {
      this.link = "/recipeDetails/" + this.myRecipeNow.NameRecipe;}
    else
      this.link = "/login";
  }
  showRecipe() {
    if (sessionStorage.getItem('userNow'))
      this.link = "/recipeDetails/" + this.myRecipeNow.NameRecipe;
    else {
      alert("אינך מחובר/ת");
      this.link = "/login";
    }
  }
}

