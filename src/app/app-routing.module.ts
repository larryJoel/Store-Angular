import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './page/products/products.component';
import { GonzalezComponent } from './page/gonzalez/gonzalez.component';


const routes: Routes = [
  {path: 'gonzalez', component: GonzalezComponent},
  {path: 'products', component: ProductsComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
