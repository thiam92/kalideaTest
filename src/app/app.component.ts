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
    alert("destroy App component storagee")
    localStorage.removeItem('myData')
  }
 
  ngOnInit(): void {
   alert("APP component")
  
   if(localStorage.getItem('myData') != null) {
     this.connected= true
   alert(localStorage.getItem('myData'))
  }

  else {
    alert("enter APP COMPO§NE§NT")
  }
  
  }

 
  title = 'KALIDEA';

afich = false;

}
