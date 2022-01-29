import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressClientInterface, AddressJobInterface } from 'src/app/model/addressComponentModel';
import { BusinessFormComponent } from '../../components/business-form/business-form.component';
import { BusinessMoreComponent } from '../../components/business-more/business-more.component';

@Component({
  selector: 'app-address-business',
  templateUrl: './address-business.component.html',
  styleUrls: ['./address-business.component.scss'],
})
export class AddressBusinessComponent implements OnInit {

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
  formDesignBusinessAbout = {
    id: "Ngocio",
    data: {},
    disabled: false,
    FormGroup: "3",
  };
  formDesignBeneficiaries = {
    id: "beneficiarios",
    data: {},
    disabled: false,
    FormGroup: "4",
  };
  formDesignBeneficiariesTwo = {
    id: "beneficiariosDos",
    data: {},
    disabled: false,
    FormGroup: "5",
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
  dataFormBusiness: any;
  dataFormBusinessMore: any;
  dataFormBusinessAbout:any;
  dataFormBeneficiaries:any;
  dataFormBeneficiariesTwo:any;
  isTruet:boolean = true;

  constructor(
    private addressForm: BusinessFormComponent,
    private addressJobForm: BusinessMoreComponent
  ) { }


  ngOnInit() {
    this.buttonText = "Guardar y continuar";
    this.sameAddressShow = false;
  }
  onUploadFile(file) {
    this.file = file;
  }
  onDataResponse(data) {
      this.dataFormBusiness = data;
    console.log(data);
  }
  onDataResponseAbout(data){
    this.dataFormBusinessAbout = data;
    console.log(data);

  }
  onDataBeneficiaries(data){
    this.dataFormBeneficiaries = data;
    console.log(data);
  }
  onDataBeneficiariesTwo(data){
    this.dataFormBeneficiariesTwo = data;
    console.log(data);
  }

  onDataResponseJob(data) {
      this.dataFormBusinessMore = data;
    console.log(data);
  }
  onSubmit() {
    let arraySubmit = {
      businessAddress: this.dataFormBusiness,
      businessAddressMore: this.dataFormBusinessMore,
      businessFormAbout: this.dataFormBusinessAbout,
      beneficiaries: this.dataFormBeneficiaries,
      beneficiariesTwo: this.dataFormBeneficiariesTwo,
      typeResidence: this.typeResidenceValue.value,
      timeResidenceValue: this.timeResidenceValue.value,
      fileResidence: this.file,
    };
    console.log(arraySubmit);
  }



  sameAddressJob(isTrue) {
    this.isTruet = isTrue
  }

}
