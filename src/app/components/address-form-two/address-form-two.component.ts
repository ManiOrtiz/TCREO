import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AddressModel } from 'src/app/model/addressComponentModel';

@Component({
  selector: 'app-address-form-two',
  templateUrl: './address-form-two.component.html',
  styleUrls: ['./address-form-two.component.scss'],
})
export class AddressFormTwoComponent implements OnInit {
  @Output() formData = new EventEmitter<any>();
  @Input() formDesign: any;
  formAddress = new FormGroup({});
  fieldsAddress: FormlyFieldConfig[] = this.addressModel.form;
  modelForm: any = {};
  id: string = '';
  forms = [];

  constructor(
    private addressModel: AddressModel
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

      this.formData.emit(this.modelForm);
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
