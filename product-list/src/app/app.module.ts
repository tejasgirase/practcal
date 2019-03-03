import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './@common/components/header/header.component';
import { FooterComponent } from './@common/components/footer/footer.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductService } from './@core/services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './@core/interceptors/api.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService,
  {provide:HTTP_INTERCEPTORS, useClass:APIInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
