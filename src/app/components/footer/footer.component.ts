import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('topPhone', [
      state('void', style({
        transform: 'translate(100%, -100%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translate-(0)'
        }))
      ])
    ]),
    trigger('midlePhone', [
      state('void', style({
        transform: 'translate(-100%, 100%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('bottomPhone', [
      state('void', style({
        transform: 'translate(100%, 100%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('title-large', [
      state('void', style({
        transform: 'translateY(-150%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('subtitle-short', [
      state('void', style({
        transform: 'translateY(-150%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('image-googlePlay', [
      state('void', style({
        transform: 'translateY(150%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('availability-large', [
      state('void', style({
        transform: 'translateY(800%)'
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
  ]
})
export class FooterComponent {

}
