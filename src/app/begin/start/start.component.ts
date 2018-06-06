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

  currentId = 0;

  step: Step;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StepService
  ) { }

  ngOnInit() {
    this.getStep(this.currentId);
  }

  getStep(id: number): void {
    console.log('Get getting-started/' + id + '...');

    this.service.getStep(id)
      .subscribe(step => this.step = step);
  }

}
