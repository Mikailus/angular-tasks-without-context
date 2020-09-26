import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToBinary'
})
export class DecimalToBinaryPipe implements PipeTransform {

  transform(value: number): string {
    return this.convertDecimalToBinary(value);
  }

  private convertDecimalToBinary(value: number): string {
    let binary = '';
    let tempNumber = value;

    while(tempNumber > 0){
        if(tempNumber % 2 === 0){
            binary = '0' + binary;
        }
        else {
            binary = '1' + binary;
        }

        tempNumber = Math.floor(tempNumber / 2);
    }

    return binary;
  }

}
