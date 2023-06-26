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
    transform: 'translateY(50%)',
  })),
  state('state2', style({
    transform: 'translateY(0)',
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

/* const transitionPhonesRigth = trigger('imagePhone', [
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
]); */

const transitionOpt1 = trigger('image1', [
  state('scrolling', style({
    position: 'relative',
    right: 0
  })),
  state('stopScroll', style({
    position: 'fixed',
    top: '0%',
    right: 30
  })),
  transition('scrolling <=> stopScroll',
    animate('0s')
  )
]);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [ transitionBanner, transitionPhone, transitionOpt1 ]
})
export class ContentComponent implements OnInit {
  runBanner: string = 'state1';
  runImgPhone1: string = 'scrolling';
  runImgPhone2: string = 'scrolling';
  runImgPhone3: string = 'scrolling';

  @HostListener('window:scroll', ['$event'])
  divScroll(e: any) {
    const window = e.currentTarget as Window;
    let currentPosition = window.scrollY;
    if (currentPosition < 400) {
      this.runBanner = 'state2';
    } else if (currentPosition >= 400) {
      this.runBanner = 'state1';
    }

    

    /* if(currentPosition > 1000 && currentPosition < 1600) { */
    if(currentPosition > 1000 && this.runImgPhone1 === 'scrolling') {
      this.runImgPhone1 = 'stopScroll';
    } 
    if(currentPosition < 1050 && this.runImgPhone1 === 'stopScroll') {
      this.runImgPhone1 = 'scrolling';
    }

    if(currentPosition > 1940 && this.runImgPhone2 === 'scrolling') {
      this.runImgPhone2 = 'stopScroll';
    } 
    if (currentPosition < 1990 && this.runImgPhone2 === 'stopScroll') {
      this.runImgPhone2 = 'scrolling';
    }

    if(currentPosition > 2830 && this.runImgPhone3 === 'scrolling') {
      this.runImgPhone3 = 'stopScroll';
    } 
    if(currentPosition < 2880 && this.runImgPhone3 === 'stopScroll') {
      this.runImgPhone3 = 'scrolling';
    }

    /* if(screen.width < 768) {
      this.imgtransition4 = 'img-opt'
    }  */

    console.log(currentPosition);
    

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
