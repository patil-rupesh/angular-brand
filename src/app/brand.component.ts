import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-brand',
  templateUrl: `brand.component.html`,
  styles: [`h1 { font-family: Lato; }`]
})
export class BrandComponent  {
  @Output()  sendMessage = new EventEmitter<string>();
  @Input() code: string;
  @Input() name: string;
  @Input() index;
  

array=[{code:'9',name:'good'},{code:'10',name:'great'},{code:'11',name:'fine'},{code:'12',name:'very good'}];

removeElement(){
  this.sendMessage.emit(index);
}
}