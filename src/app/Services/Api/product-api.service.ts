import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  httpOptions;
  // Hander Error
  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'Bearer your_token_here'
      }),
    };
  }

  // Get All Product
  getAllProduct(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(`${environment.APIUrl}/products`)
      .pipe(retry(2),
      catchError(this.handleError)
      );
  }

  // Get One Product By Id
  getProductID(PrdID: number): Observable<any> {
    return this.httpClient
      .get<any[]>(`${environment.APIUrl}/products/${PrdID}`)
      .pipe(retry(2),
      catchError(this.handleError)
      );
  }

  // Get All Product By Categorie Id
  getProductByCatID(CatID: number): Observable<any[]> {
    return this.httpClient
      .get<any[]>(`${environment.APIUrl}/products?categoryID=${CatID}`)
      .pipe(retry(2),
      catchError(this.handleError)
      );
  }

  // Add Product
  addProduct(newProd: any): Observable<any> {
    return this.httpClient
      .post<any>(
        `${environment.APIUrl}/products`,
        JSON.stringify(newProd),
        this.httpOptions
      )
      .pipe(retry(2),
      catchError(this.handleError)
      );
  }

  // Update Product By Id
  updateProductByID(PrdID: number, Update: any) {}

  // Delee Product By Id
  deleteProductByID(PrdID: number) {}
}
