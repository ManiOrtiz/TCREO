import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {  BusinessAddressModel } from '../../model/businessComponentModel';

@Component({
  selector: 'app-business-more',
  templateUrl: './business-more.component.html',
  styleUrls: ['./business-more.component.scss'],
})
export class BusinessMoreComponent implements OnInit {

  @Output() formDataJob = new EventEmitter<any>();
  @Input() formDesignJob: any;
  formAddressJob = new FormGroup({});
  fieldsAddressJob: FormlyFieldConfig[] = this.addressModelJob.form;
  modelFormJob: any = {};
  id: string = '';
  forms = [];

  constructor(
    private addressModelJob: BusinessAddressModel
  ) { }

  ngOnInit() {
    this.id= 'Job'
    this.modelFormJob = this.formDesignJob.data;
  }

  onChangeJob() {
    if (this.formAddressJob.valid) {
      this.modelFormJob.id = this.id
      this.formDataJob.emit(this.modelFormJob);
    }
  }
  onDisabled(){
    this.fieldsAddressJob.forEach(
      (data) => (data.templateOptions.disabled = true)
    );
  }
  onEnabled(){
    this.fieldsAddressJob.forEach(
      (data) => (data.templateOptions.disabled = false)
    );
  }


}
