import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  eventVar:any
  catchEventFromList(eve: any){
    console.log(eve);
    this.eventVar=eve;
  }
  
}
