import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRouterModule } from "./app-router.module";
import "hammerjs";
import { CacMaterialModule } from "./cac-material.module";
import { HomeComponent } from "./home/home.component";
import { RecipeManagementComponent } from "./recipe-management/recipe-management.component";
import { NewRecipeComponent } from "./recipe-management/new-recipe/new-recipe.component";
import { WeekPlannerComponent } from "./week-planner/week-planner.component";
import { RecipeOverviewComponent } from "./recipe-management/recipe-overview/recipe-overview.component";
import { LoginComponent } from "./login/login.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    CacMaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent, HomeComponent, RecipeManagementComponent, NewRecipeComponent, RecipeOverviewComponent,
    WeekPlannerComponent, LoginComponent, RecipeDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
