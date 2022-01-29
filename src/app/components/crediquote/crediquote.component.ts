import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-crediquote',
  templateUrl: './crediquote.component.html',
  styleUrls: ['./crediquote.component.scss'],
})
export class CrediquoteComponent implements OnInit {
  @Input() jsonCreditQuoteDesign: any;
  @Output() submitCredit = new EventEmitter<any>();

  safeContentCard: SafeHtml;
  safeContentHeader: SafeHtml;
  minAmount: number = 0;
  maxAmount: number = 0;
  increment: number = 0;
  incrementFrecuncy: number = 0;
  amountSelect: any;
  insuranceCost: number = 0;
  insuranceToPay: number = 0;
  maxFrecuency: number = 0;
  minFrecuency: number = 0;
  frecuency: any;
  frecuencySelect: string = '';
  payments: number;
  inputFrecuency: boolean = false;
  inner: boolean = false;
  frecuencyText: string = '';
  title: string = '';
  subtitle: string = '';
  content: string = '';
  amountToPay: number = 0;
  paymentsText: string = '';
  paymentsTextComplement: string = '';
  anualTax: number = 0;
  factor: number = 0;
  Iva: number = 0;
  inputAmountText: string = '';
  inputPaymentsText: string = '';

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.paymentsTextComplement = '';
    this.incrementFrecuncy = 1;
    this.title = this.jsonCreditQuoteDesign.header.title;
    this.subtitle = this.jsonCreditQuoteDesign.header.subtitle;
    this.content = this.jsonCreditQuoteDesign.contentComponent.contentComponentInner;
    this.safeContentHeader = this.sanitizer.bypassSecurityTrustHtml(
      this.subtitle
    );
    this.safeContentCard = this.sanitizer.bypassSecurityTrustHtml(
      this.content
    );
    this.minAmount = this.jsonCreditQuoteDesign.contentComponent.minAmount;
    this.maxAmount = this.jsonCreditQuoteDesign.contentComponent.maxAmount;
    this.increment = this.jsonCreditQuoteDesign.contentComponent.increment;
    this.frecuency = this.jsonCreditQuoteDesign.contentComponent.frecuency.options;
    this.inputAmountText = this.jsonCreditQuoteDesign.contentComponent.inputAmountText;
    this.inputPaymentsText = this.jsonCreditQuoteDesign.contentComponent.inputPaymentsText;
    this.setVariable();
  }

  paymentCalc(select) {
    this.inner = false;
    if(select == 'frecuency'){
      this.paymentsText = this.payments + ' ' + this.paymentsTextComplement;
      this.insuranceToPay = this.insuranceCost * this.payments;
      setTimeout(() => {
        this.inner = true;
      }, 200);
    }
    else if(this.payments > 0){
      this.insuranceToPay = this.insuranceCost * this.payments;
      setTimeout(() => {
        this.inner = true;
      }, 200);
    }
    if(this.frecuencySelect == 'Mensual'){
      this.amountToPay = ( (this.amountSelect+this.insuranceToPay) * ((this.anualTax/100)/12) ) / ( 1 - ( Math.pow((1+((this.anualTax/100)/12)),(-this.payments))) );
    }
    else{
      this.amountToPay = ((((this.amountSelect+this.insuranceToPay)*(this.payments*this.factor)*this.anualTax)) + (this.amountSelect+this.insuranceToPay) ) / this.payments ;
    }
    this.setVariable();
    let arraySubmit = {
      amountSelect: this.amountSelect,
      payments: this.payments,
      insuranceCost: this.insuranceCost,
      frecuency: this.frecuencySelect,
      amountToPay: this.amountToPay,
      amountToPayTotal: (this.amountToPay*this.payments),
      insuranceToPay: this.insuranceToPay,
      frecuencyText: this.frecuencyText
    }
    this.submitCredit.emit(arraySubmit)
  }
  selectfrecuency(frecuency) {
    this.payments = 0;
    this.paymentsText = '';
    this.inner = false;
    for (let i of this.frecuency) {
      i.selected = false;
    }
    this.frecuencySelect = frecuency.id;
    frecuency.selected = true;
    this.inputFrecuency = true;
    this.minFrecuency = frecuency.min;
    this.maxFrecuency = frecuency.max;
    this.frecuencyText = frecuency.text;
    this.paymentsTextComplement = frecuency.text2;
    this.insuranceCost = frecuency.insuranceCost;
    this.anualTax = frecuency.anualTax;
    this.factor = frecuency.factor;
    this.Iva = frecuency.iva
  }
  setVariable() {
    setTimeout(() => {
      let contentHTML = document.querySelectorAll("span");
      if (contentHTML == null) {
        this.setVariable();
      }
      else {
        contentHTML.forEach(element => {
          switch (element.textContent) {
            case '{{maxAmount}}': {
              element.innerHTML = this.maxAmount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              break;
            }
            case '{{minAmount}}': {
              element.innerHTML = this.minAmount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              break;
            }
            case '{{amountSelect}}': {
              element.innerHTML = this.amountSelect.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              break;
            }
            case '{{paymentsSelect}}': {
              element.innerHTML = this.payments.toString();
              break;
            }
            case '{{paymentsText}}': {
              element.innerHTML = this.paymentsText
              break;
            }
            case '{{frecuencyText}}': {
              element.innerHTML = this.frecuencyText
              break;
            }
            case '{{amountToPay}}': {
              element.innerHTML = this.amountToPay.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              break;
            }
            case '{{insuranceCost}}': {
              element.innerHTML = this.insuranceToPay.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              break;
            }
          }

        })
      }
    }, 200);
  }

}
