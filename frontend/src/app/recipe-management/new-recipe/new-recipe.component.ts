import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../ingredient";
import { Recipe } from "../recipe";
import { NgForm } from "@angular/forms";
import { LIVE_ANNOUNCER_PROVIDER, MdSnackBar, OVERLAY_PROVIDERS } from "@angular/material";
import { CreateRecipeResult } from "../create-recipe-result";
import { CreateRecipeResultState } from "../create-recipe-result-state";

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
  providers: [OVERLAY_PROVIDERS, MdSnackBar, LIVE_ANNOUNCER_PROVIDER]
})
export class NewRecipeComponent {


  newRecipe = new Recipe("", []);
  newIngredient = new Ingredient("", null, "");

  @Output()
  onRecipeCreated = new EventEmitter<Recipe>();

  @ViewChild('ingredientForm') ingredientForm: NgForm;
  @ViewChild('recipeForm') recipeForm: NgForm;

  @Input()
  set createRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult) {
      switch (createRecipeResult.state) {
        case CreateRecipeResultState.SUCCESS:
          setTimeout(() => {
            this.snackBar.open('Recipe ' + createRecipeResult.createdRecipe.name + ' has been created', null, {
              duration: 2000,
            });
          }, 1);

          break;
        case CreateRecipeResultState.FAILED:
          setTimeout(() => {
            this.snackBar.open('An error occured', null, {
              duration: 2000,
            });
          }, 1);
          break;
      }
    }
  }

  constructor(public snackBar: MdSnackBar) {
  }

  addIngredient(): void {
    this.newRecipe.ingredients.push(this.newIngredient);
    this.resetIngredientForm();
  }

  removeIngredient(ingredientToRemove: Ingredient): void {
    let index = this.newRecipe.ingredients.indexOf(ingredientToRemove);
    if (index > -1) {
      this.newRecipe.ingredients.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.newRecipe.ingredients.length > 0) {
      this.onRecipeCreated.emit(this.newRecipe);
      this.resetIngredientForm();
      this.resetRecipeForm();
    }
  }

  private resetIngredientForm() {
    this.newIngredient = new Ingredient("", null, "");
    this.ingredientForm.resetForm();
  }

  private resetRecipeForm() {
    this.newRecipe = new Recipe("", []);
    this.recipeForm.resetForm();
  }
}
