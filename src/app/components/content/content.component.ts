import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('phoneState', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: .5
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ContentComponent {

}
