import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendWordPipe'
})
export class AppendWordPipePipe implements PipeTransform {

  transform(text: string, word: string): string {
    return `${word} ${text}`;
  }

}
