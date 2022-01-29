import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { ProductsComponent } from '../products/products.component';
import { CrediquoteComponent } from '../../components/crediquote/crediquote.component';
import { InsuranceSelectComponent } from '../insurance-select/insurance-select.component';
import { InsuranceComponent } from '../../components/insurance/insurance.component';
import { MatModule } from 'src/matmodule/matmodules';
import { NipComponent } from '../nip/nip.component';
import { PaymentDatesComponent } from '../payment-dates/payment-dates.component';
import { FirmComponent } from '../firm/firm.component';
import { FirmPopComponent } from '../firm-pop/firm-pop.component';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AddressModel } from 'src/app/model/addressComponentModel';
import { InputFileComponent } from '../address-form/input-file/input-file.component';
import { MatSelectModule } from '@angular/material/select';
import { InsuranceModel } from 'src/app/model/creditQuoteModel';
import { AddressjobFormComponent } from '../../components/addressjob-form/addressjob-form.component';
import { AddressFormTwoComponent } from '../../components/address-form-two/address-form-two.component';
import { AddressBusinessComponent } from '../address-business/address-business.component';
import { BusinessFormComponent } from '../../components/business-form/business-form.component';
import { BusinessMoreComponent } from '../../components/business-more/business-more.component';
import { BusinessAddressModel } from '../../model/businessComponentModel';
import { BusinessAboutyouComponent } from '../../components/business-aboutyou/business-aboutyou.component';
import { BeneficiariesOneComponent } from '../../components/beneficiaries-one/beneficiaries-one.component';
import { BeneficiariesTwoComponent } from '../../components/beneficiaries-two/beneficiaries-two.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    MatModule,
    MatSelectModule,
    FormlyModule.forRoot({
      validationMessages:[
        { name: 'required', message: 'El campo es requerido' }
      ],
      validators: [
        { name: 'requiredTrue', validation: Validators.requiredTrue },
      ]
    }),
    FormlyMaterialModule,
    ReactiveFormsModule




  ],
  declarations: [
      MainPage,
      ProductsComponent,
      CrediquoteComponent,
      InsuranceSelectComponent,
      NipComponent,
      PaymentDatesComponent,
      FirmComponent,
      FirmPopComponent,
      CongratulationsComponent,
      AddressFormComponent,
      InputFileComponent,
      AddressjobFormComponent,
      AddressFormTwoComponent,
      AddressBusinessComponent,
      BusinessFormComponent,
      BusinessMoreComponent,
      BusinessAboutyouComponent,
      BeneficiariesOneComponent,
      BeneficiariesTwoComponent,
      InsuranceComponent],

  exports:[CrediquoteComponent],
  providers:[
    AddressModel,
    InsuranceModel,
    BusinessAddressModel,
    AddressFormComponent,
    AddressjobFormComponent,
    AddressFormTwoComponent,
    BusinessFormComponent,
    BusinessMoreComponent,
    BusinessAboutyouComponent,
    BeneficiariesOneComponent,
    BeneficiariesTwoComponent
  ]
})
export class MainPageModule {}
