import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CacRouterModule } from "./cac-router.module";
import "hammerjs";
import { CacMaterialModule } from "./cac-material.module";
import { HomeComponent } from "./home/home.component";
import { RecipeOverviewComponent } from "./recipe-overview/recipe-overview.component";
import { NewRecipeComponent } from "./recipe-overview/new-recipe/new-recipe.component";
import { WeekPlannerComponent } from "./week-planner/week-planner.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CacRouterModule,
    CacMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent, HomeComponent, RecipeOverviewComponent, NewRecipeComponent, WeekPlannerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
