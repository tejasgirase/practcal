import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../../../@core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getUserList().subscribe((response)=>{
      console.log(response);
      this.productList = response;
    })
  }

}
