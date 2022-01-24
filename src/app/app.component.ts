import { Component } from '@angular/core';
import { Product, ProductWithCounter } from './_models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-project';
  // addedProduct: ProductWithCounter[] = [];
 

  // onItemAdded(product: Product){
  //   console.log(product);
  //   // some logic to check duplication
  //   const newProduct: ProductWithCounter = {...product, cartCounter: 1};
  //   this.addedProduct.push(newProduct);
  // }
}
