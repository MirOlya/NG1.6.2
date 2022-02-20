import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-product',
  template: ` <p>card-product works!</p>
    <app-button></app-button><app-bage></app-bage><app-rating></app-rating>
    <p>card-product stips to work!</p>`,
  styles: [],
})
export class CardProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
