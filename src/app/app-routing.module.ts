import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolynomesComponent } from './polynomes/polynomes.component';

const routes: Routes = [
  {path:'polynome', component:PolynomesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
