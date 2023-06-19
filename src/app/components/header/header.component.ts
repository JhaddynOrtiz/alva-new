import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  onDownload() {
    window.open('https://play.google.com/store/apps/details?id=org.oyealva.stable&pli=1');
  }

}
