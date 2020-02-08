import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
   // alert('I am on init');
  }

  ngOnChanges() {
    alert('I am on onchanges');
  }
}
