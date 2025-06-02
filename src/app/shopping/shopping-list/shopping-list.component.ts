import { Component } from '@angular/core';
import { Ingredients } from 'src/app/shared/model/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredientList : Ingredients[]=[
    new Ingredients("Salt", "Tata", "1Kg"),
    new Ingredients("Oil", "Gemini", "1Ltr"),
    new Ingredients("Spice", "Everest", "3Nos")
  ]
  dateFromEdit(eve: any){
    this.ingredientList.push(eve);
  }
}
