import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPhoneNumber'
})
export class SplitPhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    const stringifiedPhoneNumber = phoneNumber.toString();
    const result = stringifiedPhoneNumber.split("");
    return result.reduce((currentPhoneNumber, currentDigit, currentIndex) => {
      if (currentIndex && !(currentIndex % 3)) {
        return currentPhoneNumber + "-" + currentDigit;
      }
      return currentPhoneNumber + currentDigit;
    }, "");

}
}
