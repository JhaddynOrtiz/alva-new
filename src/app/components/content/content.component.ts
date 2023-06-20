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
    transform: 'translateX(-100%)'
  })),
  state('state2', style({
    transform: 'translateX(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const transitionPhone = trigger('phoneState', [
  state('state1', style({
    transform: 'translateY(50%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const transitionPhonesRigth = trigger('imagePhone', [
  state('scrolling', style({
    position: 'absolute',
    right: 0
  })),
  state('stopScroll', style({
    position: 'fixed',
    top: '13%',
    right: 0
  })),
  transition('scrolling <=> stopScroll',
    animate('.5s')
  )
]);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [ transitionBanner, transitionPhone, transitionPhonesRigth ]
})
export class ContentComponent implements OnInit {
  runBanner: string = 'state1';
  runImgPhone: string = 'scrolling';

  imgtransition1: string = 'img-opt1';
  imgtransition2: string = 'img-opt1';
  imgtransition3: string = 'img-opt1';
  imgtransition4: string = 'img-opt1';

  @HostListener('window:scroll', ['$event'])
  divScroll(e: any) {
    const window = e.currentTarget as Window;
    let currentPosition = window.scrollY;
    if (currentPosition < 400) {
      this.runBanner = 'state2';
    } else if (currentPosition >= 400) {
      this.runBanner = 'state1';
    }

    if (screen.width < 768) {
      this.imgtransition1 = '';
      this.imgtransition2 = '';
      this.imgtransition3 = '';
      this.imgtransition4 = '';
    }
    

    if(screen.width > 768 && currentPosition > 1000 && currentPosition < 1600) {
      this.imgtransition1 = 'img-opt2';
    } else if(screen.width < 768) {
      this.imgtransition1 = 'img-opt'
    } else {
      this.imgtransition1 = 'img-opt1';
    }

    if(screen.width > 768 && currentPosition > 2040 && currentPosition < 2600) {
      this.imgtransition2 = 'img-opt2';
    } else if(screen.width < 768) {
      this.imgtransition2 = 'img-opt'
    } else {
      this.imgtransition2 = 'img-opt1';
    }

    if(screen.width > 768 && currentPosition > 3120 && currentPosition < 3690) {
      this.imgtransition3 = 'img-opt2';
    } else if(screen.width < 768) {
      this.imgtransition3 = 'img-opt'
    } else {
      this.imgtransition3 = 'img-opt1';
    }

    if(screen.width < 768) {
      this.imgtransition4 = 'img-opt'
    } 

    //[ngClass]="imgtransition4" 

  }

  onStartBanner() {
    this.runBanner = 'state2';
  }

  onDownload() {
    window.open('https://play.google.com/store/apps/details?id=org.oyealva.stable&pli=1');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.onStartBanner();
    }, 200);
  }

}
