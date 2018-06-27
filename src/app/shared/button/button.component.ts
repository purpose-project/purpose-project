import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a[appButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
    // Add the correct corresponding class.
    (elementRef.nativeElement as HTMLElement).classList.add('appButton');
  }

  ngOnInit() {
  }

}
