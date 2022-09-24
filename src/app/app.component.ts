import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';
  data: any;
  cartArray: any = [];

  constructor(){}

  sendCart($event:any){
    this.data = $event;
    this.cartArray.push(this.data);
    console.log('data -->',this.data)
  }
}
