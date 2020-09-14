import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Recipe } from 'src/class/Recipe';
import { User } from 'src/class/User';
import { Category } from 'src/class/Category';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  gettAllUser()
  {
    return this.http.get<User[]>("http://localhost:56204//api/User/getAllUsers")
  }
  gettAllRecipe()
  {
    return this.http.get<Recipe[]>("http://localhost:56204//api/Recipe/getAllRecipes")
  }
  findUser(u:User)
  {
    return this.http.post<User>("http://localhost:56204//api/User/checkUser",u)
  }
  AddUser(u:User)
  {
    return this.http.post<User>("http://localhost:56204//api/User/addnewUser",u)
  }
  AddRecipe(r:Recipe)
  {
    console.log(r);
    return this.http.post<Recipe>("http://localhost:56204//api/Recipe/addmyRecipe",r)
  }
  saveChangesRecipe(r:Recipe)
  {
    return this.http.post<Recipe>("http://localhost:56204//api/Recipe/saveRecipe",r)
  }
  findRecipe(r:string)
  {
    return this.http.get<Recipe>("http://localhost:56204//api/Recipe/namRecipe?namr="+r)
  }
  //
  gettAllCategory()
  {
    return this.http.get<Category>("http://localhost:56204//api/Category/GettAllCategory")
  }
  findCategory(name:Category)
  {
    return this.http.post<Category>("http://localhost:56204//api/Category/FindCategory",name);
  }
  constructor(public http:HttpClient) { }
}
