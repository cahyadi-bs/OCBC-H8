import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { PRODUCTS } from '../models/mock-product';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = of(PRODUCTS);

  constructor() { }

  getProducts(): Observable<Product[]> {
    // const products = of(PRODUCTS);

    // console.log("fetched list of products ...");
    // return products;
    return this.products
  }

  getOneProduct(id:string):Observable<Product>{
    return this.products.pipe(map(products => products.filter(products => products.id == id)[0]))
  }
  }

  
