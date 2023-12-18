import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.changeScreen();
    }, 2000);
  }

  changeScreen() {
    let loadingScreen = document.getElementById('loading-screen');
    let homeWrapper = document.getElementById('home-wrapper');

    loadingScreen?.classList.toggle('animate-[fadeOut_0.5s]');
    setTimeout(() => {
      loadingScreen?.classList.toggle('hidden');
      loadingScreen?.classList.toggle('opacity-0');
    }, 200);
    homeWrapper?.classList.toggle('hidden');
  }
}
