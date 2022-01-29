import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BusinessAddressModel } from 'src/app/model/businessComponentModel';

@Component({
  selector: 'app-beneficiaries-two',
  templateUrl: './beneficiaries-two.component.html',
  styleUrls: ['./beneficiaries-two.component.scss'],
})
export class BeneficiariesTwoComponent implements OnInit {

  @Output() formDataBeneficiariesTwo = new EventEmitter<any>();
  @Input() formDesignbeneficiariesTwo: any;
  formAddress = new FormGroup({});
  fieldsAddress: FormlyFieldConfig[] = this.addressModel.beneficiariesTwo;
  modelForm: any = {};
  id: string = '';
  forms = [];

  constructor(
    private addressModel: BusinessAddressModel
  ) { }

  ngOnInit() {
    this.id= 'client'
    this.modelForm = this.formDesignbeneficiariesTwo.data;
    console.log(this.modelForm);
  }

  onChange() {
    if (this.formAddress.valid) {
      this.modelForm.id = this.id
      console.log(this.id);

      this.formDataBeneficiariesTwo.emit(this.modelForm);
    }
  }
  onDisabled(){
    this.fieldsAddress.forEach(
      (data) => (data.templateOptions.disabled = true)
    );
  }
  onEnabled(){
    this.fieldsAddress.forEach(
      (data) => (data.templateOptions.disabled = false)
    );
  }

}
