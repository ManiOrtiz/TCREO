import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nip',
  templateUrl: './nip.component.html',
  styleUrls: ['./nip.component.scss'],
})
export class NipComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSubmit(){
    window.location.replace('#/main/fechas_pago')
  }
}
