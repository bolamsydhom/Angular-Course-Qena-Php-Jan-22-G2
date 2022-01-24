import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductWithCounter } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  addedProducts: ProductWithCounter[] = [];

  dropdownOpened = false;
  constructor(private productService: ProductService) { 
  }
  
  ngOnInit(): void {
   this.productService.cartHasBeenChanged.subscribe(
     (res)=>{
       this.addedProducts = res;
     },
     (err)=>{},
     ()=>{}
   )
  }

}



// const productItem = new productItemComponent(productService: ProductService)

// // in productItem Component

// class productItem{
//   productService
//   constructor(private productService: ProductService){
//     this.productService = productService
//   }
// }