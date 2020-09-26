import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendWord'
})
export class AppendWordPipe implements PipeTransform {

  transform(value: string, wordToAppend: string): string {
    console.log(wordToAppend)
    return `${wordToAppend} ${value}`;
  }

}
