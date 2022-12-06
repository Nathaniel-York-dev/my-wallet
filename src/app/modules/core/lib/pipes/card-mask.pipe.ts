import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})
export class CardMaskPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/.(?=.{4})/g, '*').slice(-8);
  }

}
