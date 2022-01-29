import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AddressjobFormComponent } from 'src/app/components/addressjob-form/addressjob-form.component';
import { AddressClientInterface, AddressJobInterface, AddressModel } from 'src/app/model/addressComponentModel';
import { AddressFormTwoComponent } from '../../components/address-form-two/address-form-two.component';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {


  formDesignClient = {
    id: "Cliente",
    data: {},
    disabled: false,
    FormGroup: "1",
  };
  formDesignJobClient = {
    id: "Trabajo",
    data: {},
    disabled: false,
    FormGroup: "2",
  };
  typeResidence = [
    { id: "Propia", name: "Propia", value: "propia" },
    { id: "Rentada", name: "Rentada", value: "Rentada" },
  ];
  sameAddressShow: boolean;
  noUpdateData = new FormControl(false);
  updateData = new FormControl(true);
  sameAddress = new FormControl(true);
  typeResidenceValue = new FormControl("");
  timeResidenceValue = new FormControl("");
  fileResidenceValue = new FormControl("");
  file: any;
  buttonText: string = "";
  modelAddress: AddressClientInterface;
  modelJobAddress: AddressJobInterface;
  dataFormClient: any;
  dataFormClientJob: any;

  constructor(
    private addressForm: AddressFormTwoComponent,
    private addressJobForm: AddressjobFormComponent

  ) {

  }

  ngOnInit() {
    this.buttonText = "Guardar y continuar";
    this.sameAddressShow = false;
  }
  onUploadFile(file) {
    this.file = file;
  }
  onDataResponse(data) {
      this.dataFormClient = data;
    console.log(data);
  }
  onDataResponseJob(data) {
      this.dataFormClientJob = data;
    console.log(data);
  }
  onSubmit() {
    let arraySubmit = {
      clientAddress: this.dataFormClient,
      clientAddressJob: this.dataFormClientJob,
      typeResidence: this.typeResidenceValue.value,
      timeResidenceValue: this.timeResidenceValue.value,
      fileResidence: this.file,
    };
    console.log(arraySubmit);
  }
  OnChanges(change, value) {
    if (change === "Change" && value) {
      this.noUpdateData.setValue(false);
      this.updateData.setValue(true);
      this.addressForm.onEnabled();
      this.typeResidenceValue.enable();
      this.timeResidenceValue.enable();
      this.fileResidenceValue.enable();
    } else {
      this.updateData.setValue(false);
      this.addressForm.onDisabled();
      this.typeResidenceValue.disable();
      this.timeResidenceValue.disable();
      this.fileResidenceValue.disable();
    }
  }
  sameAddressJob(isTrue) {
    if (isTrue) {
      this.addressJobForm.onDisabled();
      this.sameAddressShow = false;
    } else {
      this.sameAddressShow = true;
      this.formDesignClient = {
        id: "Cliente",
        data: this.dataFormClient,
        disabled: false,
        FormGroup: "1",
      };
      this.addressJobForm.onEnabled();
    }
  }



}
