import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter();

  public data = { name: 'vale', age: 23 }
  sendData() {

    this.event.emit(this.data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
