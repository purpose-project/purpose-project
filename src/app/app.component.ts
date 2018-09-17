import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { PageTitleService } from './page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
    ) { }

  ngOnInit() {
    this.loginAnonymously();
    this.makeUser();
  }

  private loginAnonymously(): void {
    this.afAuth.auth.signInAnonymously()
      .catch(error => {
        console.log(error.message);
    });
  }

  private makeUser(): void {
    this.afAuth.user.subscribe(user => {
      if(user) {
        this.db.collection('users').doc(`${user.uid}`).set({
          isAnonymous: user.isAnonymous
        }).catch(e => {console.log(e)});
        console.log(user.uid);
      }
      else console.log("not logged in");
    })
  }
}
