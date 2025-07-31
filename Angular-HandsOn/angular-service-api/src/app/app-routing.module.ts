import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAllComponent } from './Components/product-all/product-all.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';

const routes: Routes = [
  {path:'product-view',component:ProductViewComponent},
  {path:'product-all',component:ProductAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
