import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{
  product_id: string;

  product:Product = {} as Product;


  constructor(private actRoute:ActivatedRoute , private productService:ProductService) {
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit():void{
    this.getOneProduct(this.product_id);
  }

  getOneProduct(id:string){
    this.productService
    .getOneProduct(id)
    .subscribe(p=>this.product=p)
  }

}
