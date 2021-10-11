import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote-class';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  QuoteClassess: QuoteClass[] = [
    new QuoteClass (1, 'Warren Buffet', 'If you don’t find a way to make money while you sleep, you will work until you die', 'Wikitae James',new Date(2022,6,9)),
    new QuoteClass (2,'Bill Gates', 'If you are born poor it is not your mistake, but if you die poor its your mistake.',' Brian Nashon', new Date(2019,2,9)),
    // new QuoteClass (3, 'Mark Zuckerberg', 'The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.', 'Rodricks Whirose',new Date(2023,6,12)),
    // new QuoteClass (4, 'Robson Walton', 'I learned from my dad that change and experimentation are constants and important. You have to keep trying new things.', 'Dentox Amerigo',new Date(2023,6,12)),
 
  ];
  


  toggleDetails(index:any){
    this.QuoteClassess[index].showQuotes = !this.QuoteClassess[index].showQuotes;
  }

  submitToParent(QuoteClasse:any) {
 let QuoteClasseLength = this.QuoteClassess.length;
 QuoteClasse.id = QuoteClasseLength+1;
 QuoteClasse.postDate = new Date(QuoteClasse.postDate);
 this.QuoteClassess.push(QuoteClasse)
  }


  eraseQuote(toErase:any,index:any) {
if(toErase) {
  let confirmErase = confirm("Are you certain you want to remove this quote?")
if(confirmErase) {
  this.QuoteClassess.splice(index,1)
}
}


  }


  ngOnInit(): void {
  }

}
