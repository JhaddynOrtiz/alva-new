import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const transitionBanner = trigger('bannerState', [
  state('state1', style({
    transform: 'translateX(-100%)',
    opacity: 0
  })),
  state('state2', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const transitionPhone = trigger('phoneState', [
  state('state1', style({
    transform: 'translateY(20%)',
    opacity: 0
  })),
  state('state2', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [ transitionBanner, transitionPhone ]
})
export class ContentComponent implements OnInit {
  runBanner: string = 'state1';

  @HostListener('window:scroll', ['$event'])
  divScroll(e: any) {
    const window = e.currentTarget as Window;
    let currentPosition = window.scrollY;
    if (currentPosition < 400) {
      this.runBanner = 'state2';
    } else if (currentPosition >= 400) {
      this.runBanner = 'state1';
    }
  }

  onStartBanner() {
    this.runBanner = 'state2';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.onStartBanner();
    }, 200);
  }

}
