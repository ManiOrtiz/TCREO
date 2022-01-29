import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss'],
})
export class CongratulationsComponent implements OnInit {

  pathUrl = this.activatedRoute.snapshot['_urlSegment'].segments[1].path;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.pathUrl);

  }
  onSubmit(){

  }
  onSubmitDos(){
    window.location.replace('#/main/felicidades_credito_preaprobado')
  }
  onSubmitTres(){
    window.location.replace('#/main/felicidades_reedito_cuenta')
  }
  onSubmi(){
    window.location.replace('#/main/direccion')

  }

}
