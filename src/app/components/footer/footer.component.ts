import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const transitionTopPhone = trigger('topPhone', [
  state('state1', style({
    transform: 'translate(100%, -100%)'
  })),
  state('state2', style({
    transform: 'translate-(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const trasitionMidPhone = trigger('midlePhone', [
  state('state1', style({
    transform: 'translate(-100%, 100%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const trasitionBottomPhone = trigger('bottomPhone', [
  state('state1', style({
    transform: 'translate(100%, 100%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const trasitionTitle = trigger('title-large', [
  state('state1', style({
    transform: 'translateY(-150%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const trasitionSubTitle = trigger('subtitle-short', [
  state('state1', style({
    transform: 'translateY(-150%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const trasitionImageGP = trigger('image-googlePlay', [
  state('state1', style({
    transform: 'translateY(150%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

const trasitionAvailable = trigger('availability-large', [
  state('state1', style({
    transform: 'translateY(800%)'
  })),
  state('state2', style({
    transform: 'translateY(0)'
  })),
  transition('state1 <=> state2',
    animate(800)
  )
]);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    transitionTopPhone, 
    trasitionMidPhone, 
    trasitionBottomPhone, 
    trasitionTitle, 
    trasitionSubTitle, 
    trasitionImageGP, 
    trasitionAvailable
  ]
})

export class FooterComponent {

  runState: string = 'state1';

  @HostListener('window:scroll', ['$event'])
  divScroll(e: any) {
    const window = e.currentTarget as Window;
    let currentPosition = window.scrollY;
    if (currentPosition > 4000) {
      console.log('true');
      this.runState = 'state2';
    } else if (currentPosition <= 4000) {
      this.runState = 'state1';
    }
  }

  onDownload() {
    window.open('https://play.google.com/store/apps/details?id=org.oyealva.stable&pli=1');
  }

}
