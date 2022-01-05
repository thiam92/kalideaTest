import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './feature/form-group/form-group.component';
import { SpinnerComponent } from './feature/spinner/spinner.component';
import { PlayerService } from './player/player.service';
import { SigninComponent } from './player/signin/signin.component';
import { SignoutComponent } from './player/signout/signout.component';
import { StartComponent } from './play/start/start.component';
import { BoxComponent } from './play/box/box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    SpinnerComponent,
    SigninComponent,
    SignoutComponent,
    StartComponent,
    BoxComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
