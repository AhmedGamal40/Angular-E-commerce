import { Component } from '@angular/core';
import { UserAutheService } from 'src/app/Services/user-authe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isUserlog:boolean = false;

  constructor(private userAathe:UserAutheService ,private locatinRoute:Location) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isUserlog = this.userAathe.isUserLogged;
  }
login() {
  this.userAathe.UserLogin("Ahmed" , "1234567890");
    this.isUserlog = this.userAathe.isUserLogged;
    // back to last page
    this.locatinRoute.back()
}
submitForm(){
  
}
}
