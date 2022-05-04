import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../model/order';
import { OrderProduct } from '../model/order-product';
import { Product } from '../model/product';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  @Output() orderedProduct = new EventEmitter<{product: Product, quantity: number}>();
  @Input() orderNumber = 0;

  products: Product[] = [];
  orderDetails: OrderProduct[] = [];
  
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  productReceived(data: Product){
    console.log(data);
    this.products.push(data);    
  }

  orderReceived(data: Order){
    console.log(data);    
    for(let i = 0; i<this.products.length; i++){
      let orderDetail = new OrderProduct(1,data,this.products[i],1,50);
      this.orderService.addProductsToOrder(data.id, this.products[i].id, 1).subscribe(x => {
        this.orderDetails.push(x); 
        console.log(x);
          
      });         
    }
  }


  // addProduct(product: Product){
  //   this.productAdded.emit(product);
  // }
}
