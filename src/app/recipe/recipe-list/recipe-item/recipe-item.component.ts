import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input ('eachItem') rec:any;
@Output ('sendingItem') sendingItem : EventEmitter<Recipe>=new EventEmitter();

itemClicked(){
  this.sendingItem.emit(this.rec);
  console.log(this.rec)
}
}
