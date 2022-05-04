import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() productAdded = new EventEmitter<Product>();

  products: Product[] = [];  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.getProducts();
  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(product: Product){
    this.productAdded.emit(product);
  }

}
