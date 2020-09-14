import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/class/Recipe';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/class/Category';
import { User } from 'src/class/User';


@Component({
  selector: 'app-all-recipos',
  templateUrl: './all-recipos.component.html',
  styleUrls: ['./all-recipos.component.css']
})
export class AllReciposComponent implements OnInit {
  constructor(public ser:UserServiceService,public router:Router,public active:ActivatedRoute ) { }
  recipes: Recipe[]=[];
  arrEzer:Recipe[]=[];
  flag;
  form;
  flag1;
  us:string;
  S:Recipe= new Recipe();
  u:User=new User ();
  arrCategory : Category;
  name;
  ngOnInit() 
  {
    this.S.CategoryRecipe=new Category();
    this.us =sessionStorage.getItem("userNow");
    this.ser.gettAllRecipe().subscribe(suc=>{this.recipes=suc;},err=>{alert("errrrrror");console.log(err);});
    this.ser.gettAllCategory().subscribe(suc=>{this.arrCategory=suc;});
 
   if (this.us == null) {
    this.us= "לא מחובר";
    this.flag = false;
  }
  else {
    this.flag = true;
  }
  }
     
  findcategory(){this.ser.findCategory(this.S.CategoryRecipe).subscribe(suc=>this.S.CategoryRecipe=suc);}
  onclick()
  {  
    this.flag=false;
    this.ser.gettAllRecipe().subscribe(suc=>{this.recipes=suc;
      console.log(this.S);
    for(let x of this.recipes)
    {
    
      if((this.S.NameRecipe===""|| x.NameRecipe.indexOf(this.S.NameRecipe)>-1 )&&
      (this.S.Time===0||this.S.Time===undefined|| x.Time <=this.S.Time)&& x.CategoryRecipe.CategoryName==this.S.CategoryRecipe)
      {
        this.arrEzer.push(x);
        this.flag=true;
      }
    }
    if(this.flag==false)
    {
     this.S.View=true;
    }
    this.recipes=this.arrEzer;
    this.arrEzer=[];
    console.log(this.arrEzer);
    
    },err=>{alert("errrrrror");console.log(err);});

  }
   onclickB()
  {
    this.flag=false; 
    this.S.NameRecipe=null;
    this.S.Time=null;
    this.S.CategoryRecipe=null;
    this.ser.gettAllRecipe().subscribe(suc=>{this.recipes=suc;},err=>{alert("errrrrror");console.log(err);});
    this.flag1=false; 
}
}
 
