import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ThisReceiver } from '@angular/compiler';

@Injectable()
export class RecipeService{
 


  private recipes: Recipe[]=[
    new Recipe(
      'French fries',
      'A super yummy french fries- just awesome!',
      'https://static.toiimg.com/thumb/msid-87034836,width-900,height-1200,resizemode-6.cms',
      [
        new Ingredient('potatoes', 2),
        new Ingredient('sause', 1 ),
      ]),
    new Recipe(
      'cheesy pizza',
      'what else you need to say?',
      'https://sodelicious.recipes/wp-content/uploads/2020/01/23.10.2019-R1-mica-Cheesy-French-Fry-Pizza-with-Salami.jpg',
      [
        new Ingredient(' French fries', 3),
        new Ingredient(' dried oregano', 2),
        new Ingredient('  Parmesan, grated', 2),

      ])
  ];
  constructor(private slService: ShoppingListService){}
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients);
  }
}