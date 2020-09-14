import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllReciposComponent } from './all-recipos/all-recipos.component';
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { MinitPipe } from './pipes/MinitPipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortRecipeComponent } from './short-recipe/short-recipe.component';
import { RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { DifficultyPipe } from './pipes/DifficultyPipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllReciposComponent,
    AddRecipeComponent,
    LogoutComponent,
    MinitPipe,
    ShortRecipeComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    DifficultyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
