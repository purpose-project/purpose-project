import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { StepService } from './service/step.service';
import { Step } from './service/step';
import { PageTitleService } from '../../../page-title.service';

@Component({
  providers: [StepService],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  step$: Observable<Step>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stepService: StepService,
    private pageTitleService: PageTitleService
  ) { }

  ngOnInit() {
    this.getStep();
    this.pageTitleService.setTitle('Find your purpose');
  }

  private getStep(): void {
    this.step$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.stepService.getStep(params.get('id')))
    );
  }
}
