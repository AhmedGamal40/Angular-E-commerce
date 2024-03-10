import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { UserAutheService } from 'src/app/Services/user-authe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchTerm: string = '';
  searchResults: any = [];
  isUserlog:boolean;
  username:string | null = ''
  constructor(private productsService:ProductServiceService , private userAathe:UserAutheService) {
    this.isUserlog=this.userAathe.isUserLogged
    this.username = localStorage.getItem('username');
  };
  
  onSearch() {
    this.productsService.searchProducts(this.searchTerm).subscribe({
      next: (results) => {
        this.searchResults = results;
      }
    });
  };

  ngOnInit(): void {
    // this.isUserlog = this.userAathe.isUserLogged;
    this.userAathe.getLoggedState().subscribe(stutas => this.isUserlog= stutas);
  }
  
  logout(){
    this.userAathe.UserLogOut()
    this.isUserlog = this.userAathe.isUserLogged
  }
}


