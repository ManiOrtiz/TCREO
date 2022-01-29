import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BusinessAddressModel } from '../../model/businessComponentModel';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss'],
})
export class BusinessFormComponent implements OnInit {

  @Output() formDataa = new EventEmitter<any>();
  @Input() formDesign: any;
  formAddress = new FormGroup({});
  fieldsAddress: FormlyFieldConfig[] = this.addressModel.accountYou;
  modelForm: any = {};
  id: string = '';
  forms = [];

  constructor(
    private addressModel: BusinessAddressModel
  ) { }

  ngOnInit() {
    this.id= 'client'
    this.modelForm = this.formDesign.data;
    console.log(this.modelForm);
  }

  onChange() {
    if (this.formAddress.valid) {
      this.modelForm.id = this.id
      console.log(this.id);

      this.formDataa.emit(this.modelForm);
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
