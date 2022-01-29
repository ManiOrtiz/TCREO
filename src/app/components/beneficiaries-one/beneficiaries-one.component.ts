import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BusinessAddressModel } from 'src/app/model/businessComponentModel';

@Component({
  selector: 'app-beneficiaries-one',
  templateUrl: './beneficiaries-one.component.html',
  styleUrls: ['./beneficiaries-one.component.scss'],
})
export class BeneficiariesOneComponent implements OnInit {


  @Output() formDataBeneficiaries = new EventEmitter<any>();
  @Input() formDesignbeneficiaries: any;
  formAddress = new FormGroup({});
  fieldsAddress: FormlyFieldConfig[] = this.addressModel.beneficiaries;
  modelForm: any = {};
  id: string = '';
  forms = [];

  constructor(
    private addressModel: BusinessAddressModel
  ) { }

  ngOnInit() {
    this.id= 'client'
    this.modelForm = this.formDesignbeneficiaries.data;
    console.log(this.modelForm);
  }

  onChange() {
    if (this.formAddress.valid) {
      this.modelForm.id = this.id
      console.log(this.id);

      this.formDataBeneficiaries.emit(this.modelForm);
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
