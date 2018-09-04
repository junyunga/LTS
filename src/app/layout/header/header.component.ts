import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

export interface Site {
  name: string,
  url: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  site: Site[] = [
    {
      name: 'material',
      url:'https://material.angular.io/components'
    },
    {
      name: 'fxLayout',
      url:'https://tburleson-layouts-demos.firebaseapp.com/#/docs'
    },
    {
      name: 'angular6',
      url:'https://angular.io'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  selectChanged(event) {
    window.open(event)
  }

}
