import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  addedProducts!: Product[];

  dropdownOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

}
