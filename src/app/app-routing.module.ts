import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageRoutingModule } from './page/main/main-routing.module';

const routes: Routes = [
  {
    path:'',redirectTo:'/main', pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    MainPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
