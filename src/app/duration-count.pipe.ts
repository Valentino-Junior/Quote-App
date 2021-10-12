import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCount'
})
export class DurationCountPipe implements PipeTransform {

//   transform(value: any):any {
//     if (value) {
//       const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
//       if (seconds < 29)
//       return 'Just now';
//       const intervals = {
//         'year': 31536000,
//         'month': 2592000,
//         'week': 604800,
//         'day': 86400,
//         'hour': 3600,
//         'minute': 60,
//         'second': 1
//       };
//       let counter;
//       for (const i in intervals) {
//         counter = Math.floor(seconds / intervals[i]);
//         if (counter > 0)
//         if (counter === 1) {
//           return counter + ' ' + i + ' ago';
//         } else {
//           return counter + ' ' + i + 's ago';
//         }
//       }
//     }
//     return value;
//   }

// }

 transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}





