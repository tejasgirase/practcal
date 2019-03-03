import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './modules/product/product-list/product-list.component'

const routes: Routes = [{
  path: 'product',
  component:ProductListComponent,
  data: {title:"Product List"}
},
{
  path: '**',
  redirectTo: 'product'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
