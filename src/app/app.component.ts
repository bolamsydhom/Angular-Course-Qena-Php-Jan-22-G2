import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-project';
  addedProduct: Product[] = [];
 

  onItemAdded(product: Product){
    console.log(product);
    this.addedProduct.push(product);
  }
}
