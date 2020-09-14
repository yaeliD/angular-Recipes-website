import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllReciposComponent } from './all-recipos/all-recipos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"All-Recipos",component:AllReciposComponent },
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogoutComponent},
  {path:"AddRecipe",component:AddRecipeComponent},
  {path:"editRecipe/:recipeName",component:EditRecipeComponent},
  {path:"recipeDetails/:recipeName",component:RecipeDetailsComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
