import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;

  @Output()
  itemAddedToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

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

  onItemAdded(){
    console.log(this.productItem);
    // this.itemAddedToCart.emit(this.productItem);
    this.productService.addProductToCart(this.productItem)
  }

}
