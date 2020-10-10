import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase'
})
export class MyUpperCasePipe implements PipeTransform {

  transform(text: string): string {
    return text.toUpperCase();
  }

}
