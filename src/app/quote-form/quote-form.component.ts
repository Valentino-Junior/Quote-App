import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteClass } from '../quote-class';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter();

  // public data = { name: 'vale', age: 23 }
  // sendData() {

    // this.event.emit(this.data);
  // }


  newquoteClass = new QuoteClass(0,'','', '',new Date());

  submitQuote() {
    this.event.emit(this.newquoteClass)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
