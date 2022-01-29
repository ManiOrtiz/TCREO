import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BusinessAddressModel } from 'src/app/model/businessComponentModel';

@Component({
  selector: 'app-business-aboutyou',
  templateUrl: './business-aboutyou.component.html',
  styleUrls: ['./business-aboutyou.component.scss'],
})
export class BusinessAboutyouComponent implements OnInit {
  @Output() formDataAbout = new EventEmitter<any>();
  @Input() formDesignaccountYou: any;
  formAddress = new FormGroup({});
  fieldsAddress: FormlyFieldConfig[] = this.addressModel.accountYou;
  modelForm: any = {};
  id: string = '';

  constructor(
    private addressModel: BusinessAddressModel
  ) { }

  ngOnInit() {
    this.id= 'client'
    this.modelForm = this.formDesignaccountYou.data;
    console.log(this.modelForm);
    console.log(this.formAddress);

  }

  onChange() {
    if (this.formAddress.valid) {
      this.modelForm.id = this.id
      console.log(this.id);

      this.formDataAbout.emit(this.modelForm);
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
