import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-index',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {
affichOngletPlayer : boolean = false
  constructor(private router : Router,private  playerService : PlayerService) { }
  ngOnDestroy(): void {
 
    localStorage.removeItem('myData')
    this.affichOngletPlayer = false;
  }

  ngOnInit(): void {
   
    if(localStorage.getItem('myData') != null) {
    this.affichOngletPlayer = true;
    }
  }

  clickEvent(){
    this.router.navigate(['/play/start']);
  }

}
