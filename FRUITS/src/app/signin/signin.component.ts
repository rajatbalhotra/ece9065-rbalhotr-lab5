import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
Username: string;
Password: string;
state: any=null;

  constructor(private fauth: AngularFireAuth, private router: Router) {
  this.fauth.authState.subscribe((auth) => {
            this.state = auth
        });
  }


  ngOnInit() {
  }

  signup(){
     firebase.auth().createUserWithEmailAndPassword(this.Username, this.Password)

            .then(resp => {
                firebase.auth().signInWithEmailAndPassword(this.Username, this.Password)
                    .then((address) => {

                        const user = firebase.auth().currentUser;

                        user.sendEmailVerification();

                    });
            });
  }
  signin(){
     firebase.auth().signInWithEmailAndPassword(this.Username, this.Password)

            .then((resp) => {
                this.state = resp

                const emailaddress = firebase.auth().currentUser;
                if (emailaddress.emailVerified) {

                    this.router.navigate(['/harmony']);

                }
                else {
                    console.log('Incorrect Details')
                }
            });
    }
  }


}
