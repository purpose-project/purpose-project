import { Injectable } from '@angular/core';

import { BeginModule } from './begin.module';

import { Step } from './step';
import { STEPS } from './mock-STEPS';

@Injectable({
  providedIn: BeginModule
})
export class StepService {

  constructor() { }

  getStep(id): Step {
    return STEPS[id];
  }
}
