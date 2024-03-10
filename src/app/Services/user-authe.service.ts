import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAutheService {
  private isLoggedSubject : BehaviorSubject<boolean>
  constructor() {
    this.isLoggedSubject =new BehaviorSubject<boolean> (this.isUserLogged);
   }

  // user Login 
  UserLogin(userName:string , password:string){
    // call api userLogin , and get access token
    let userToken = '58585wdwd55dwd';
    localStorage.setItem('token', userToken )
    localStorage.setItem('username', userName);
    this.isLoggedSubject.next(true)
  };
   
  // user log out 
  UserLogOut(){
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false)
  };

  // check user 
  get isUserLogged():boolean{
    return (localStorage.getItem('token')) ? true : false ;
  };

  getLoggedState(){
    return this.isLoggedSubject.asObservable();
  }
}
