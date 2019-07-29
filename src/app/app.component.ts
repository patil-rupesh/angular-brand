import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

array=[{code:'9',name:'good'},{code:'10',name:'great'},{code:'11',name:'fine'},{code:'12',name:'very good'}];

  receiveElement($event){
  console.log(event);
  this.array.sl;
  }  
}
