import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modulo'
})
export class ModuloPipe implements PipeTransform {

  transform(value: number, modulus: number): number {
    return value % modulus;
  }

}
