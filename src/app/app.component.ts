import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first app with angular';
  isAuth = false ;

  appareils = [
      {
          name : 'Machine à laver',
          status: 'éteint'
      },
      {
          name : 'Télévision',
          status: 'allumé'
      },
      {
          name : 'Ordinateur',
          status: 'éteint'
      }
  ];
  constructor() {
      setTimeout(() => {
          this.isAuth = true;
      }, 1000);
  }

    onAllumer() {
        console.log('tous les appareils sont allumés');
    }
}
