import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent {
  productsArray: Product[] ;
  constructor() {
    this.productsArray =  [
      {id:1, name: 'Camera', price: 100, discount: 20, imageUrl: 'https://picsum.photos/200/300'},
      {id:2, name: 'photoCamera', price: 100, discount: 10, imageUrl: 'https://picsum.photos/200/301'},
      {id:3, name: 'Laptop', price: 1000, imageUrl: 'https://picsum.photos/200/302'},
      {id:4, name: 'Pc', price: 2000, discount: 10, imageUrl: 'https://picsum.photos/200/303'},
      {id:5, name: 'Mobile', price: 3000, imageUrl: 'https://picsum.photos/200/304'},
      {id:6, name: 'Tablet', price: 4000, discount: 10, imageUrl: 'https://picsum.photos/200/305'},
      {id:7, name: 'TV', price: 5000, imageUrl: 'https://picsum.photos/200/306'},
      {id:8, name: 'Fridge', price: 6000, discount: 100, imageUrl: 'https://picsum.photos/200/307'},
    ];
  }


  testFun(){
    this.productsArray.push();
  }
}

