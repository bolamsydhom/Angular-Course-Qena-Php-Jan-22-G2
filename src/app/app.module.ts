import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one-component/test-one.compontnt';
import { TestFromCliComponent } from './test-from-cli/test-from-cli.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductFilterComponent } from './core/product-feature/product-filter/product-filter.component';
import { CustomeDirectveDirective } from './shared/custome-directve.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestFromCliComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListingComponent,
    ProductFilterComponent,
    CustomeDirectveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
