import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}

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
    }, 300);
    homeWrapper?.classList.toggle('hidden');
  }
}
