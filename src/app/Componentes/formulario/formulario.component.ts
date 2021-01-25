import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '10px',
        width: '10px',
        opacity: 1,
        backgroundColor: 'white'
      })),
      state('closed', style({
        height: '10px',
        width: '445px',
        opacity: 0.5,
        backgroundColor: 'green',
      })),
      state('finish', style({
        height: '10px',
        width: 'px',
        opacity: 0.5,
        backgroundColor: 'gray',
      })),
      transition('open => closed', [
        animate('3s')
      ]),
      transition('closed => finish', [
        animate('1s')
      ]),
    ]),
  ]
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = true;

  eventoOpen() {
    this.isOpen = !this.isOpen;
  }

}
