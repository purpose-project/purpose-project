import { Component, OnInit } from '@angular/core';

import { Goal } from 'src/app/types/goal';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  goals: Goal[];

  constructor() {
    this.goals = [
      { goal: "Here's a goal", dueDate: new Date(2019, 10, 17) },
      { goal: "Here's another goal", dueDate: new Date(2019, 9, 21) }
    ];
   }

  ngOnInit() {
  }

}
