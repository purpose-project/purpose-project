import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from 'firebase';

import { StepService } from './service/step.service';
import { Step } from './service/step';
import { PageTitleService } from '../../../page-title.service';

@Component({
  providers: [StepService],
  templateUrl: './ideal-life.component.html',
  styleUrls: ['./ideal-life.component.scss']
})
export class IdealLifeComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<any>;

  step$: Observable<Step>;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private stepService: StepService,
    private pageTitleService: PageTitleService,
    private afAuth: AngularFireAuth,
    private afFirestore: AngularFirestore
  ) { }

  ngOnInit() {
    // Set page title
    this.pageTitleService.setTitle('Find your purpose');
    // Get user
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        console.log('no user logged in');
      }
    });
  }

  public setStepResponse(val: string): void {
    const stepDoc = this.afFirestore.doc(`users/${this.user.uid}/goals/ideal_life`);
    stepDoc.set({data: val});
  }
}
