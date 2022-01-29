import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss'],
})
export class InsuranceComponent implements OnInit {

  @Input() jsonInsuranceDesign: any;
  @Output() selectInsurance = new EventEmitter<any>();
  safeContentCard: SafeHtml;
  contentCard:  any;
  selectInsuranceValue: string = '';
  selectInsuranceContent: string = '';
  icon: string = '';

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.icon = 'shield-checkmark';
    this.contentCard = this.jsonInsuranceDesign
    for(let item in this.contentCard ){
      this.safeContentCard = this.sanitizer.bypassSecurityTrustHtml(
      this.contentCard[item].contentComponentInner);
      if(this.contentCard[item].selected == true){
        this.selectInsuranceContent = this.contentCard[item].contentComponentInner;
      }
    }
  }
  onSelected(value){
    for (let item of this.contentCard) {
      item.selected = false;
    }
    value.selected = true;
    this.selectInsuranceValue = value.id;
    this.selectInsuranceContent = value.contentComponentInner;
    //this.selectInsuranceValue = value;
    this.selectInsurance.emit(this.selectInsuranceValue)
  }

}
