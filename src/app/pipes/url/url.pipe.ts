import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlpipe'
})
export class UrlPipe implements PipeTransform {

  transform(value: any, fallback: string, forceHttps: boolean = false): string {

    let image = '';
    if(value){
      image = value;
    }else{
      image = fallback;
    }

    if(forceHttps){
      if(image.indexOf("https") == -1 ){
        image = image.replace('http','https');
      }
    }

    return image;
  }

}
