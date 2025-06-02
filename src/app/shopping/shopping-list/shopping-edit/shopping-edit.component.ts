import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/model/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild ('name') name:ElementRef|any
  @ViewChild ('brand') brand:ElementRef|any
  @ViewChild ('qty') qty:ElementRef|any

  @Output ('toList') toList=new EventEmitter()

  ingClick(){
    //console.log(this.name);
    let ingred=new Ingredients(this.name.nativeElement.value, this.brand.nativeElement.value, this.qty.nativeElement.value);
    //console.log(ingred)
    this.toList.emit(ingred);
    this.name.nativeElement.value="";
    this.brand.nativeElement.value="";
    this.qty.nativeElement.value="";
  }

}
