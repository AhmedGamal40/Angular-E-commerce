import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/Services/Api/product-api.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product?: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    // private productSevices: ProductServiceService,
    private productApiService:ProductApiService,
    private locatinRoute:Location
  ) {}
  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productApiService.getProductID(Number(productId)).subscribe({
      next: (product) => {
        this.product = product;
      },
    });
    
  }

  GoBack() {
    this.locatinRoute.back()
  }
}
