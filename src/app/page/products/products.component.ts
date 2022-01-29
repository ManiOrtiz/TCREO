import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { InsuranceModel } from 'src/app/model/creditQuoteModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  jsonCredit = {
    header: {
      title: "Mi crédito en línea",
      subtitle: `
      <h4>Cuánto vas a solcitar:</h4>
      <h3>Crédito</h3>`,
    },
    contentComponent: {
      inputAmountText: "Monto solicitado",
      inputPaymentsText: "Plazo",
      minAmount: 10_000,
      maxAmount: 50_000,
      increment: 1_000,
      frecuency: {
        options: [
          {
            id: "Meses",
            text: "mensual",
            text2: "meses",
            min: 6,
            max: 12,
            insuranceCost: 50,
            anualTax: 118.32,
            factor: 0,
            selected: false,
            iva: 0.16,
          },
          {
            id: "Quincenas",
            text: "quincenal",
            text2: "quincenas",
            min: 12,
            max: 24,
            insuranceCost: 25,
            anualTax: 0.001933333333,
            factor: 15,
            selected: false,
            iva: 0.16,
          },
        ],
      },
      contentComponentInner: `
      <br>
      <h4>Mi crédito es de:</h4>
      <p>Monto solicitado  <span>{{amountSelect}}</span></p>
      <p>A un plazo de: <span>{{paymentsText}}</span></p>
      <p>Pago <span class="frecuencyText">{{frecuencyText}}</span>  de: <span>{{amountToPay}}</span></p>`,
      amountSelect: 0,
      amountToPay: 0,
      paymentsSelect: 0,
    },
  };
  jsonBanner = {
    imageHeader: "../../../assets/libs/inher/images/pal-negocio-tienda.png",
    contentComponentInner: ` <h1>Estás solicitando:</h1>
    <br>
    <h2><span>{{amountSelectClient}}</span></h2>
    <br><br>
    <p>El crédito debe ser saldado en</p>
    <p><span>{{payments}}</span> pagos <span>{{frecuencytext}}</span></p>
    <p>Tu pago <span>{{frecuency}}</span> será:</p>
    <h2><span>{{amountToPayClient}}</span></h2>`,
    amountSelect: 0,
    payments: 0,
    frecuency: "",
    frecuencyText: "",
    amountToPay: 0,
    link: {
      policityInner:
        " <p>Más de tu seguro | <a>Términos y condiciones</a> | <a >Aviso de privacidad</a> | TDSFIN S.A.P.I de C.V.</p> ",
      policity: {
        terms: "Términos y condiciones",
        termsLink:
          '<a href="https://came.org.mx/contrato-digital.html" target="_blank">Términos y condiciones</a>',
        privacity: "Aviso de privacidad",
        privacityLink:
          '<a href="https://came.org.mx/aviso-de-privacidad.html" target="_blank">Aviso de privacidad</a>',
      },
    },
    contentComponentInnerTemporal: `
    <h1>Un crédito hecho para ti</h1>
    <br>
    <h2>Montos accesibles</h2>
    <br><br>
    <p>El crédito para tu negocio, tus proyectos o lo que necesites</p>`,
  };
  agentForm: FormGroup
  checkAgent = new FormControl(true);
  seguro: string = '';
  creditQuote: any;

  constructor(
    //private lateralBanner: LateralBannerComponent,
    private insurance: InsuranceModel
  ) { }

  ngOnInit() {
    if(this.insurance.insuranceSelect != null || this.insurance.insuranceSelect != undefined){
      this.seguro = this.insurance.insuranceSelect
    }
    else{
      this.seguro = 'platino'
    }
    this.agentForm = new FormGroup({
      'phoneAgent': new FormControl('', [Validators.required] )
    });

    this.checkAgent.valueChanges.subscribe((bool: boolean) => {
      bool ? this.agentForm.get('phoneAgent').setValidators(Validators.required) : this.agentForm.get('phoneAgent').clearValidators();
      this.agentForm.get('phoneAgent').updateValueAndValidity();
    });
  }

  onCatch(event) {
    event.contentInner = ` <h1>Estás solicitando:</h1>
    <br>
    <h2><span>{{amountSelectClient}}</span></h2>
    <br><br>
    <p>El crédito debe ser saldado en</p>
    <p><span>{{payments}}</span> pagos <span>{{frecuencytext}}</span></p>
    <p>Tu pago <span>{{frecuency}}</span> será:</p>
    <h2><span>{{amountToPayClient}}</span></h2>`;
    //this.lateralBanner.onChange(event);
    //this.creditQuote = event;
  }


  onSubmit(){
    let arrayRequest = {
        cotizador: this.creditQuote,
        seguro: this.seguro,
        asesorAtencion: this.agentForm.value.checkAgent,
        telefonoAsesor: this.agentForm.value.phoneAgent
    }
    console.log(arrayRequest);
    window.location.replace('#/main/sic')
  }
  validateIfChecked(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (this.checkAgent) {
        return control.value ? null : { 'err': true };
      }
      return null;
    }
  }

}
