import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {
  ListMedia : string[] = [];
  constructor() { 
    this.ListMedia = [
      'Offer 50% ',
      'Offer Friday 70%',
      '',
      'Offer Mobiles 30%',
    ]
  }

  getObservabel(time:number){
    return new Observable <string>((observal)=> 
     {
      // observal.next()
      // observal.Erorr()
      // observal.complet()
      let counter = 0;
      let timer = setInterval(() => {
        if(counter == this.ListMedia.length){
          observal.complete();
        } else if (this.ListMedia[counter] ==' ') {
          observal.error('Error : The Element Empty')
        } else {
          observal.next(this.ListMedia[counter]),
          ++counter
        }
      } ,time*1000 );
      // unSunscribe 
      // 1- by defult in ( Error , Complete )
      // 2- Handel Unsubscribe
      return {
        unsubscribe() {clearInterval(timer) , console.log('Clean')}
      }
    }
    )
  }
}
