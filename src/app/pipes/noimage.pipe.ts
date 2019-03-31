import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:string): string {
    if(!images || images===null){
      
      return 'assets/images/noimage.png'
    
   
    }else return images;
    
  }

}
