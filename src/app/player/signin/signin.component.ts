import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 

  userForm: FormGroup = new FormGroup({
    login: new FormControl(''),
   passe: new FormControl(''),
   
  });


  player : Player | undefined ;
  credentiel : Credential | undefined ; 
  credentialSubscription : Subscription | undefined;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private  playerService : PlayerService) { }

  ngOnInit(): void {
     this.initForm()
  }


  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
    login:  ['', [Validators.required, Validators.email]],
      passe:[
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
  
    });
}


  onSubmitForm() {
    this.submitted = true;

   const formValue = this.userForm.value;
   
    alert(JSON.stringify(this.userForm.value, null, 2));
    this.credentialSubscription =  this.playerService.signin({passe:formValue['passe'], login:formValue['login']}).subscribe(

      (data : Player) => {
        alert(JSON.stringify(data))
        if(data) {
         // recuperer l'objet 
          this.player = data;
          alert(JSON.stringify(this.player))
        }
      
      }

    )
 
  }

}
