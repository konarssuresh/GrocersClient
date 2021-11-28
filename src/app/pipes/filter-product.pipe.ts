import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: any[], textfilter: string): any[] {
    if (textfilter) {
      value = value.filter((data) => {
        if (!data.name.toLowerCase().search(textfilter.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    }
    return value;
  }
}
