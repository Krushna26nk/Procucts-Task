import { HttpClient } from '@angular/common/http';
import { Component, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any = [];
  addToCartProductList: any = [];

  @Output() cart = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
    this.http.get('assets/json/product_list.json')
    .subscribe((data:any) =>{
      console.log('data from json file --> ',data);
      data.forEach((element:any) => {
        this.productList.push(element);
      });
    })
  }

  sendCart(data:any){
    console.log('sendCartcall')
    this.cart.emit(data);
  }

}
