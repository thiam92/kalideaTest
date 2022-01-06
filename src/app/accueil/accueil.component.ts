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
    alert("destroy")
    localStorage.removeItem('myData')
  }

  ngOnInit(): void {
    alert("Accueik")
    alert(localStorage.getItem('myData'));
  if(localStorage.getItem('myData') != null) {
    this.affichOngletPlayer = true;
  }
  }

}
