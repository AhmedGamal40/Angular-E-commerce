import { Component } from '@angular/core';
import { ProductApiService } from '../Services/Api/product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  showSuccessAlert = false;
  showErroeAlert = false;
  categoriesList :any[];
  NewProduct : any = {};
  constructor(private addProductApi:ProductApiService ,private router:Router){
    this.categoriesList = 
    [{"id": "1","name": "Laptops"},
    {"id": "2","name": "Mobiles"},
    { "id": "3","name": "Tablets"}]
  }
  addProduct(){
    // const newProduct:any = {
    //   "id":"10",
    //   "name": "Product One",
    //   "price": 250,
    //   "quality": 9,
    //   "imgURL": "https://placehold.co/300x300",
    //   "categoryID": 1
    // }
    const observe = {
      next: ()=>{
        (newProduct :any)=>{
      this.showSuccessAlert = true;
      // Optionally, hide the alert after a few seconds
      this.router.navigateByUrl('/Products')
      setTimeout(() => this.showSuccessAlert = false, 5000);
    }
      },
      error:(err:Error)=>{alert(err.message)}
    }
    this.addProductApi.addProduct(this.NewProduct).subscribe(observe)
  }
}
