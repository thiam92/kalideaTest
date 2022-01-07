import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { StartComponent } from './play/start/start.component';
import { SigninComponent } from './player/signin/signin.component';
import { SignoutComponent } from './player/signout/signout.component';



const appRoutes: Routes = [
  { path: 'player/signin', component: SigninComponent },
  { path: 'player/signout', component: SignoutComponent },
  { path: 'play/start', component: StartComponent },
  
  { path: '', component: AccueilComponent },
  


  // { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
