import { Component, OnInit} from '@angular/core';
import { Recipe } from 'src/class/Recipe';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { Category } from 'src/class/Category';
import {FormGroup,FormControl,Validators} from '@angular/forms';



@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
  
})
export class AddRecipeComponent implements OnInit {
  arrCategory : Category;
  r :Recipe= new Recipe();
  us:string;
  flag: boolean = false;
  add;
  CategoryNameId:number;
  Re;

  constructor(public ser:UserServiceService,public router:Router) { }

  ngOnInit() {
    this.add=new FormGroup({  
      NameR: new FormControl("",Validators.compose([Validators.required,Validators.pattern('[a-zA-Zא-ת ]*')])),
      TimeR: new FormControl("", Validators.pattern('[0-9]*')),
      DifficultyR: new FormControl("", Validators.pattern('[0-9]*')),
   });
    this.r.CategoryRecipe=new Category();
    this.ser.gettAllCategory().subscribe(suc=>{this.arrCategory=suc;});
this.us = sessionStorage.getItem("userNow");
    if (this.us == null) {
      this.us = "לא מחובר";
      this.flag = false;
    }
    else {
      this.flag = true;
    }
    this.r.Preparation=[];
    this.r.Ingredients=[];
this.r.Preparation.push("");
this.r.Ingredients.push("");
  
     }
    
     findcategory(){this.ser.findCategory(this.r.CategoryRecipe).subscribe(suc=>this.r.CategoryRecipe=suc);}
  addmyRecipe()
  {

      console.log(this.r.Time);
      console.log(this.r.CategoryRecipe);
    console.log(this.Re); 
    if(this.r.Image)
    {this.r.Image =this.r.Image.slice(12);}
/*this.r.NameRecipe=this.add.NameR;
    this.r.Time=this.add.TimeR;
    this.r.Difficulty=this.add.Difficulty;*/
    this.r.UserName=Object(this.us);
    this.ser.AddRecipe(this.r).subscribe(suc=>{
        if(suc)alert("המתכון נוסף בהצלחה");
        this.router.navigate(["All-Recipos"]);});
        
  
 }

 addsomthing(i)
{
 if(this.r.Preparation[i+1]==undefined)
    this.r.Preparation.push("");
}
addRowIngridience(n)
{
  if(this.r.Ingredients[n+1]==undefined)
     this.r.Ingredients.push("");
}
 trackByFn(index: any, item: any) {
  return index;
}











}
