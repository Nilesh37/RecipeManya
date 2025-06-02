import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from './../../shared/model/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipeList: any[]=[
    new Recipe("Pohe1", "MH", "https://www.shutterstock.com/image-photo/alookanda-poha-tarri-pohe-spicy-600w-1282013134.jpg"),
    new Recipe("Upma", "TN", "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/upma-recipe-1-1152x1536.jpg"),
    new Recipe("Samosa", "India", "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg")
  ];
  @Output ('sendingToList') sendingToList=new EventEmitter();
  catchEvent(eve:any){
    this.sendingToList.emit(eve);
    console.log(eve);
  }
}
