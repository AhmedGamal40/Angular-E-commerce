import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableServiceService } from 'src/app/Services/observable-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data:string =''
  private subscribtion? : Subscription;
  constructor(private observableSevice : ObservableServiceService) {}
  ngOnInit(): void {
    let observ = {
      next:(data:string)=> {
        // console.log(data)
        this.data = data
      },
       error:(err:string)=> {
        console.log(err)
      },
       complet:()=> {
        console.log('Finished')
      }
    }
    // console.log(observ)
    this.subscribtion = this.observableSevice.getObservabel(4).subscribe(observ)
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribtion?.unsubscribe()
  }
}
