import { Component, OnInit } from '@angular/core';
import { JournalEntry } from 'src/app/types/journal-entry';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  entries: JournalEntry[];
  constructor() { 
    this.entries = [
      { title: "Entry 0", content: "Hello world" },
      { title: "Entry 1", content: "Hi planet" }
    ];
  }

  ngOnInit() {
  }

}
