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

  

  // public quotee =  new QuoteClass (0, '','', '', new Date ())
 
  // sendData() {

    // this.event.emit(this.quotee);
  // }

  //upvote and downvote functions
upvote:number =0
downvote:number =0
  upVote() {
this.upvote++
  }

  downVote() {
    this.downvote++
      }


//highest vote
highestVote() {
  
}

//delete function
      deleteMain(erase:boolean) {
this.event.emit(erase)
      }
  constructor() { }

  ngOnInit(): void {
  }

}
