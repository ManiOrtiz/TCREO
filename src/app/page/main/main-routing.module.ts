import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { ProductsComponent } from '../products/products.component';
import { InsuranceSelectComponent } from '../insurance-select/insurance-select.component';
import { NipComponent } from '../nip/nip.component';
import { PaymentDatesComponent } from '../payment-dates/payment-dates.component';
import { FirmComponent } from '../firm/firm.component';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { AddressBusinessComponent } from '../address-business/address-business.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'seguros',
        component: InsuranceSelectComponent
      },
      {
        path: 'sic',
        component: NipComponent
      },
      {
        path: 'fechas_pago',
        component: PaymentDatesComponent
      },
      {
        path: 'firma',
        component: FirmComponent
      },
      {
        path: 'felicidades_credito_aprobado',
        component: CongratulationsComponent
      },
      {
        path: 'felicidades_credito_preaprobado',
        component: CongratulationsComponent
      },
      {
        path: 'felicidades_reedito_cuenta',
        component: CongratulationsComponent
      },
      {
        path:'direccion',
        component:AddressFormComponent
      },
      {
        path:'negocio',
        component:AddressBusinessComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
