import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  template: `
    <p>drop-down-list works!</p>
    <app-button></app-button>
    <p>drop-down-list stops to work!</p>
  `,
  styles: [],
})
export class DropDownListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
