import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toObj',
})
export class ToObjPipe implements PipeTransform {
  transform(key: string, value: any): unknown {
    return { [key]: value };
  }
}
