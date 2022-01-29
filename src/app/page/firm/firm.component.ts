import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirmPopComponent } from '../firm-pop/firm-pop.component';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss'],
})
export class FirmComponent implements OnInit {

  constructor(
    private modalController:ModalController,
  ) { }

  ngOnInit() {}
  onSubmit(){

  }
  async firmModal(){
    const modal = await this.modalController.create({
      component: FirmPopComponent,
      animated:true,
      mode:'ios',
      backdropDismiss:false,
      cssClass: 'login-modal'
    })

    return await modal.present();

  }


}
