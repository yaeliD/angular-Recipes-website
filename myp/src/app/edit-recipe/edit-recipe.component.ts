import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/class/Recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Category } from 'src/class/Category';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  constructor(public ser:UserServiceService,public router:Router,public active:ActivatedRoute) { }
  r :Recipe= new Recipe();
  c:Category=new Category();
  im:string;
  arrCategory : Category;
  i;
  add;
  name;
  ngOnInit() {
     
      this.active.params.subscribe(suc=>{
      this.name=suc["recipeName"];
      console.log(this.name);
       this.ser.findRecipe(this.name).subscribe(suc=>{this.r=suc;this.im=this.r.Image});
      this.ser.gettAllCategory().subscribe(suc=>{this.arrCategory=suc;});
     
    })
    this.add=new FormGroup({   
        TimeR:new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ])),
        DifficultyR:new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ]))
        
   });
  }

  addRowIngridience(n)
 {
   if(this.r.Ingredients[n+1]==undefined)
      this.r.Ingredients.push("");
      if(this.r.Ingredients[n+1]!=undefined&&this.r.Ingredients[n]=="")
      {for(var j =n; j<this.r.Ingredients.length-1; j++)
          this.r.Ingredients[j]=this.r.Ingredients[j+1]
      this.r.Ingredients.pop();}
 }
 addsomthing(i)
{
  if(this.r.Preparation[i+1]==undefined)
     this.r.Preparation.push("");
     if(this.r.Preparation[i+1]!=undefined&&this.r.Preparation[i]=="")
  {for(var j =i; j<this.r.Preparation.length-1; j++)
      this.r.Preparation[j]=this.r.Preparation[j+1]
  this.r.Preparation.pop();}
}
 trackByFn(index: any, item: any) {
  return index;
}
saveChanges()
{ 
   if(this.im!=this.r.Image)
  {this.r.Image =this.r.Image.slice(12);}
  else{this.r.Image}
  if(this.r.Preparation[+1]==undefined)
  this.r.Preparation.pop()
  if(this.r.Ingredients[+1]==undefined)
  this.r.Ingredients.pop()
  this.add.controls['TimeR'].setValue(this.r.Time);
  this.ser.saveChangesRecipe(this.r).subscribe(suc=>{
    if(suc)alert("המתכון נשמר בהצלחה");
    this.router.navigate(["All-Recipos"]);});
}
dontsaveChanges()
{
  this.router.navigate(["All-Recipos"]);
}
}
