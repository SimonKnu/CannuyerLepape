import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'musiquefull'
})

export class MusiquefullPipe implements PipeTransform {

  transform(value: string): any {
    return 'MusiqueFull/' + value;
  }

}
