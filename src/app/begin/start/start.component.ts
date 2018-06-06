import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { StepService } from './service/step.service';
import { Step } from './service/step';
import { Command } from 'protractor';

@Component({
  providers: [StepService],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  step$: Observable<Step>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StepService
  ) { }

  ngOnInit() {
    this.getStep();
  }

  getStep(): void {
    this.step$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getStep(params.get('id')))
    );
  }
}
