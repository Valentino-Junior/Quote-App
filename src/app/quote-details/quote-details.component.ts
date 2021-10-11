import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { QuoteClass } from '../quote-class';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quoteSend!:QuoteClass; 
  @Output() event: EventEmitter<any> = new EventEmitter();

  public QuoteClasse:any;

  public quotee =  new QuoteClass (0, '','', '', new Date ())

  sendData() {

    this.event.emit(this.quotee);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
