import { Component,Input,SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {

  cartArray = [];
  price: any = 0;
  @Input() cartList: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes --',changes['cartList'].currentValue);
    // this.sum(changes.cartList.currentValue);
    if(changes['cartList'].isFirstChange()){
      this.sum()
    }
  }

  sum(){
    this.cartList.forEach((element:any) => {
      return this.price + element?.price; 
    });
    console.log('price --',this.price);
  }


}
