import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-insurance-select',
  templateUrl: './insurance-select.component.html',
  styleUrls: ['./insurance-select.component.scss'],
})
export class InsuranceSelectComponent implements OnInit {
  jsonInsurance = [
    {
      id: "PLATINO",
      title: "<h1>PAQUETE <strong><span>PLATINO</span></strong> + BÁSICO</h1>",
      selected: true,
      contentComponentInner: `
      <h2><span>$320</span></h2>
      <br>
      <h3>Incluye:</h3>
      <br>
      <p>PAQUETE BÁSICO</p>
      <p> + </p>
      <p>$50,000.00 de vida</p>
      <p> + </p>
      <p>$25,000.00 de enfermedades graves</p>
      <br>
      `,
      cost: 320
    },
    {
      id: "PREMIUM",
      title: "<h1>PAQUETE <strong><span>PREMIUM</span></strong> + BÁSICO</h1>",
      selected: false,
      contentComponentInner: `
      <h2><span>$280</span></h2>
      <br>
      <h3>Incluye:</h3>
      <br>
      <p>PAQUETE BÁSICO</p>
      <p> + </p>
      <p>$25,000.00 de vida</p>
      <p> + </p>
      <p>$25,000.00 de enfermedades graves</p>
      <br>
      `,
      cost: 320
    },
    {
      id: "BÁSICO",
      title: "<h1>PAQUETE <strong><span>BÁSICO</span></strong></h1>",
      selected: false,
      contentComponentInner: `
      <h2><span>$120</span></h2>
      <br>
      <h3>Incluye:</h3>
      <br>
      <p>Seguro de vida por el valor del crédito</p>
      <p> + </p>
      <p>Asistencias telefónicas</p>
      <p>Asistencia funeraria</p>
      <br>
      `,
      cost: 320
    },
  ];

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}

      onSelectInsurance(selection){
      console.log(selection);
  }
  onSubmit(){

    //this.router.navigateByUrl('#/main/products')
     window.location.replace('#/main/products')

  }
}
