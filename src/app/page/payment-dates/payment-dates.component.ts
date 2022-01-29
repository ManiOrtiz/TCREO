import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-dates',
  templateUrl: './payment-dates.component.html',
  styleUrls: ['./payment-dates.component.scss'],
})
export class PaymentDatesComponent implements OnInit {
  displayedColumns: string[] = ['pagos', 'estatus', 'saldo', 'liquidar'];
  dataSource = ELEMENT_DATA;
  simpleTable: boolean;
  materialTable: boolean;
  ionicTable: boolean;
  dataClient: any;
  alertChip: boolean;

  constructor() { }

  ngOnInit() {
    this.alertChip = true;
    this.dataClient = [
      {
        name: 'Jonathan Alexis Huerta Vazquez', id: '00000001', idLoan: '012312321', dateLoan: '16/11/2021',
        account: '091231231', accountClabe: '01239123172389712983'
      }
    ];
    this.simpleTable = true;
    this.materialTable = false;
    this.ionicTable = false;
  }

  tableChange(typeTable: string) {
    if (typeTable === 'st') {
      this.simpleTable = true;
      this.materialTable = false;
      this.ionicTable = false;
    }
    else if (typeTable === 'mt') {
      this.materialTable = true;
      this.simpleTable = false;
      this.ionicTable = false;
    }
    else {
      this.ionicTable = true;
      this.simpleTable = false;
      this.materialTable = false;
    }
  }
  alert() {
    this.alertChip = false;
  }
  onSubmit(){
    window.location.replace('#/main/firma')
  }
}
export interface PeriodicElement {
  estatus: string;
  pagos: number;
  saldo: number;
  liquidar: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { pagos: 1_638.34, estatus: 'Pagado', saldo: 9_462.64, liquidar: '30/03/2022' },
  { pagos: 1_638.34, estatus: 'Pagado', saldo: 9_462.64, liquidar: '30/04/2022' },
  { pagos: 1_638.34, estatus: 'Pagado', saldo: 9_462.64, liquidar: '30/05/2022' },
  { pagos: 1_638.34, estatus: 'Pagado', saldo: 9_462.64, liquidar: '30/06/2022' },
  { pagos: 1_638.34, estatus: 'Pagado', saldo: 9_462.64, liquidar: '30/07/2022' },
  { pagos: 1_638.34, estatus: 'Pagado', saldo: 9_462.64, liquidar: '30/08/2022' },
  { pagos: 1_638.34, estatus: 'Atrasado', saldo: 9_462.64, liquidar: '30/09/2022' },
  { pagos: 1_638.34, estatus: 'Atrasado', saldo: 9_462.64, liquidar: '30/10/2022' },
  { pagos: 1_638.34, estatus: 'Atrasado', saldo: 9_462.64, liquidar: '30/11/2022' },
  { pagos: 1_638.34, estatus: 'Pendiente', saldo: 9_462.64, liquidar: '30/12/2022' },
];

