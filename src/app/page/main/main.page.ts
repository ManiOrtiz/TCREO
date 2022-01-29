import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  emaild = this.activatedRoute.snapshot['_urlSegment'].segments[1].path;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    console.log(this.emaild);
  }

  onClick(){
    console.log("click");
    window.location.replace(`#/main/products`)

  }

}
