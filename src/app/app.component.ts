import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';

import { PageTitleService } from './page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.loginAnonymously();
  }

  private loginAnonymously(): void {
    this.afAuth.auth.signInAnonymously().catch(error => {
      console.log(error.message);
    });
  }
}
