import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioplayService {

  url: string;
  stream: any;
  promise: any;

  constructor() {
    // this.url = "http://akalmultimedia.net:8000/GDNSLDH";
    this.url = 'http://dreamsiteradiocp2.com:8050/;stream.mp3';
    this.stream = new Audio(this.url);
  }

  play(url) {
    this.stream.play(url);
    this.promise = new Promise((resolve, reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });

      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });

  return this.promise;
}

pause() {
  this.stream.pause();
}

}
