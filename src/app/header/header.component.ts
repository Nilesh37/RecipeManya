import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output('sendClicked') sendClicked=new EventEmitter();
  argVar:string|any='recipe'
  recipeClicked(arg:string){
    // console.log(arg);

    this.sendClicked.emit(arg);
    this.argVar=arg;
  }
}
