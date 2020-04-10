import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: any;
  productsUrl: string;

  constructor(http) {
    this.http = http;
    this.productsUrl = 'http://localhost:8888/api/products';
  }

  findAll() {
    return this.http.get(this.productsUrl);
  }
  save(product: any) {
    return this.http.post(this.productsUrl, product);
  }
}
