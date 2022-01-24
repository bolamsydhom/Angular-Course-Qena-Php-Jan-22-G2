import { EventEmitter, Injectable } from '@angular/core';
import {
  Product,
  ProductWithCounter,
} from 'src/app/_models/product/product.model';
import { ProductTwoService } from './product-two.service';

@Injectable({
    providedIn: 'root'
  })

export class ProductService {
  productsArray: Product[] = [
    {
      id: 1,
      name: 'Camera',
      price: 100,
      discount: 20,
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'photoCamera',
      price: 100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/301',
    },
    {
      id: 3,
      name: 'Laptop',
      price: 1000,
      imageUrl: 'https://picsum.photos/200/302',
    },
    {
      id: 4,
      name: 'Pc',
      price: 2000,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/303',
    },
    {
      id: 5,
      name: 'Mobile',
      price: 3000,
      imageUrl: 'https://picsum.photos/200/304',
    },
    {
      id: 6,
      name: 'Tablet',
      price: 4000,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/305',
    },
    {
      id: 7,
      name: 'TV',
      price: 5000,
      imageUrl: 'https://picsum.photos/200/306',
    },
    {
      id: 8,
      name: 'Fridge',
      price: 6000,
      discount: 100,
      imageUrl: 'https://picsum.photos/200/307',
    },
  ];

  cartHasBeenChanged: EventEmitter<ProductWithCounter[]> = new EventEmitter<ProductWithCounter[]>();

  private cartArray: ProductWithCounter[] = [];
  constructor(private productTwo: ProductTwoService) {}

  getAllProducts(): Product[] {
    return this.productsArray;
  }

  getProductById() {}
  addProduct(product: Product) {
      this.productsArray.push(product);
  }
  updateProduct() {}
  deleteProduct() {}

  addProductToCart(product: Product) {
    console.log(product);
    // some logic to check duplication
    const newProduct: ProductWithCounter = { ...product, cartCounter: 1 };
    this.cartArray.push(newProduct);
    this.cartHasBeenChanged.emit(this.cartArray);
  }
}
