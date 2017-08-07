import {Component, OnInit} from "@angular/core";
import {RecipeService} from "../recipe-management/recipe-service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Recipe} from "../recipe";

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {

  private recipe: Recipe;
  private base64EncodedImages = [];

  constructor(private route: ActivatedRoute,
              private service: RecipeService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipe(params.get('id')))
      .subscribe((recipe: Recipe) => this.recipe = recipe);

    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipeImages(params.get('id')))
      .subscribe((images) => {
        for (var i = 0; i < images.json().length; i++) {
          this.base64EncodedImages.push("data:image/jpg;base64," + images.json()[i]);
        }
      });

  }
}