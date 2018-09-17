import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Step } from './step';
import { STEPS } from './mock-STEPS';

@Injectable()
export class StepService {

  constructor() { }

  getStep(id): Observable<Step> {
    return of(STEPS[id]);
  }
}
