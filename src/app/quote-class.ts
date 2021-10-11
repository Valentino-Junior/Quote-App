export class QuoteClass {

    showQuotes!:boolean;
    constructor (public id: number, public author:string, public quote: string, public postedBy: string, public postedDate: Date) {
        this.showQuotes=false
    }
}
