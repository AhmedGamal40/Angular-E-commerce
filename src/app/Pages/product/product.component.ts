import { Component ,OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/Services/Api/product-api.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products:any[] = [];
  constructor(
    // private productService: ProductServiceService
    private productApiService:ProductApiService,
    ) { }

  ngOnInit() {
    this.productApiService.getAllProduct().subscribe(data => {
      this.Products = data;
    });
  }
    
  }

