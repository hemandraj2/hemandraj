import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {

  transform(list:any[],value): unknown {
    if(value){
      return list.filter(a=>(a.name.includes(value)||a.email.includes(value)||a.phone.includes(value)));
    }
    else{
      return list;
    }
  }

}
