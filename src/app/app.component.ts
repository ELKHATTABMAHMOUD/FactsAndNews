import { Component } from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {OnInit} from '@angular/core';
import {from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first app with angular';
  isAuth = false ;

 appareils: any[];

  constructor(private appareilService: AppareilService) {
      setTimeout(() => {
          this.isAuth = true;
      }, 1000);
  }
  ngOnInit(){
      this.appareils = this.appareilService.appareils ;
  }


    onSwitchOffAll(){
        this.appareilService.onEteindre();
    }
    onSwitchOnAll(){
        this.appareilService.onAllumer();
    }
}
