import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        
      })),
      transition('open <=> closed', [
        animate('2s')
      ]),
    ]),
  ]
})

export class IntroduccionComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  isOpen = true;

  eventoOpen() {
    this.isOpen = !this.isOpen;
  }
}
