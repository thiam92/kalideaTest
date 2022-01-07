import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './player/player.service';
import { SigninComponent } from './player/signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {

  email : any;
  connected: boolean = false;
  constructor( private  playerService : PlayerService) { }
 
 
  ngOnDestroy(): void {
    localStorage.removeItem('myData')
  }
 
  ngOnInit(): void {
  
  // this.email=  this.playerService.player?.email

  //  if(localStorage.getItem('myData') != null) {
  //    this.connected= true
   
  // }

  // else {
  
  // }
  
  }

 
  title = 'KALIDEA';

afich = false;

}
