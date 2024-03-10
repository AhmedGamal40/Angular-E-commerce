// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {  map } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductServiceService {
//   constructor(private http: HttpClient) { }
//  readJsonFile(): Observable<any> {
//     return this.http.get('/assets/products-list.json');
//   }

//   getProductById(id: number): Observable<any> {
//     return this.http.get('/assets/products-list.json').pipe(
//       map(products => products.find(product => product.id === id)),
//     );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  title:string= ''
  constructor(private http: HttpClient) { }

  // If your JSON is an array of products
  readJsonFile(): Observable<any[]> {
    return this.http.get<any[]>('/assets/products-list.json');
  }

  // get product by id
  getProductById(id: number): Observable<any | undefined> {
    return this.http.get<any[]>('/assets/products-list.json').pipe(
      map(products => products.find(product => product.id === id))
    );
  };

  // search by title or duscription 
  searchProducts(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>('/assets/products-list.json').pipe(
      map(products => 
        products.filter(product => 
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
}
