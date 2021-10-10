import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCount'
})
export class DurationCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
