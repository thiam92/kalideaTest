import { Component, OnDestroy, OnInit, Output,EventEmitter } from '@angular/core';
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
 
  //  @Output() public  email = new EventEmitter();
  @Output() email = new EventEmitter<string>();


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
    login:  ['', [Validators.required, Validators.email, Validators.minLength(8),]],
      passe:[
        '',
        [
          Validators.required,
          Validators.minLength(4),
      
        ]
      ],
  
    });
}


  onSubmitForm() {
    this.submitted = true;

   const formValue = this.userForm.value;
   
    // alert(JSON.stringify(this.userForm.value, null, 2));
    this.credentialSubscription =  this.playerService.signin({passe:formValue['passe'], login:formValue['login']}).subscribe(

      (data : Player) => {
        // alert(JSON.stringify(data))
        if(data) {
         // recuperer l'objet 
          this.player = data;
          alert(JSON.stringify(this.player))
         // Send Id Player 
          localStorage.setItem('myData', JSON.stringify(this.player))
         
          
          this.router.navigate(['/']);
          // this.email.emit(formValue['login']);
        }
      
      }

    )
 
  }

}
