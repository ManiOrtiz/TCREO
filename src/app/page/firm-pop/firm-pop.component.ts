import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-firm-pop',
  templateUrl: './firm-pop.component.html',
  styleUrls: ['./firm-pop.component.scss'],
})
export class FirmPopComponent implements OnInit {

  constructor(private modalController:ModalController,) { }

  ngOnInit() {}

  async dismiss() {
    await this.modalController.dismiss();
  }
  async onSubmit(){
    window.location.replace('#/main/felicidades_credito_aprobado');
    await this.modalController.dismiss();
  }

}
