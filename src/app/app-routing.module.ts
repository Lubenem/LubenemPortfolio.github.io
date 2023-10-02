import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioOneComponent } from './components/portfolio-one/portfolio-one.component';

const routes: Routes = [
  {
    path: 'portfolio-one',
    pathMatch: 'full',
    component: PortfolioOneComponent,
  },
  {
    path: '',
    redirectTo: 'portfolio-one',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
