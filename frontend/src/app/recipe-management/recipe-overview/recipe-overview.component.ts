import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { MatDialog, MatSnackBar } from '@angular/material';
import { YesNoDialogComponent } from '../../kub-common/yes-no-dialog/yes-no-dialog.component';
import { DeleteRecipeResultState } from '../delete-recipe-result-state';
import { DeleteRecipeResult } from '../delete-recipe-result';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kub-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css'],
  providers: [MatDialog, MatSnackBar]
})
export class RecipeOverviewComponent {

  recipes: Recipe[];

  @Input('myRecipes')
  set setMyRecipes(myRecipes: Recipe[]) {
    if (myRecipes) {
      this.recipes = this.orderByCreationDateDescending(myRecipes);
    }
  }


  @Output()
  onRecipeDelete = new EventEmitter<Recipe>();

  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar,
              private translate: TranslateService) {
  }

  @Input('deleteRecipeResult')
  set setDeleteRecipeResult(deleteRecipeResult: DeleteRecipeResult) {
    if (deleteRecipeResult && deleteRecipeResult.state === DeleteRecipeResultState.SUCCESS) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== deleteRecipeResult.deletedRecipeIdResponse.deletedRecipeId);
      // TODO: find a proper solution (instead of set timeout). Problem: https://github.com/angular/angular/issues/10762
      setTimeout(() => {
        this.translate.get('Recipe.DeleteRecipe').subscribe(text => {
          this.snackBar.open(text, null, {
            duration: 4000,
          });
        });
      }, 1);
    }
  }

  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe-detail', recipe.id]);
  }

  onDelete(recipe: Recipe) {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {
        question: 'Biste sicher?',
        title: 'Rezept löschen'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.onRecipeDelete.emit(recipe);
      }
    });
  }

  private orderByCreationDateDescending(myRecipes: Recipe[]) {
    return myRecipes.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  }
}
