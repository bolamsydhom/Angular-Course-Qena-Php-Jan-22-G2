import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;
  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice(): number{
    let result ;
    if(this.productItem.discount){
      result = this.productItem.price - this.productItem.discount;
    }else{
      result = this.productItem.price;
    }

    return result;
  }

}
