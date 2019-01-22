import { Component, OnInit } from '@angular/core';

import { RadioplayService } from './../services/radioplay.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  player: any;

  constructor(player: RadioplayService) {
    this.player = player;
   }

  ngOnInit() {
  }

  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });
  }

  pause() {
    this.player.pause();
  }

}
