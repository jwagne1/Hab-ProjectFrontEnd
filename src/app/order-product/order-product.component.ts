import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../model/order';
import { OrderProduct } from '../model/order-product';
import { Product } from '../model/product';
import { ProductComponent } from '../product/product.component';
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
    this.products.push(data);
    let orderDetail = new OrderProduct();
    orderDetail.product = data;
    orderDetail.productQty = 1;
    this.orderDetails.push(orderDetail);    
  }

  orderReceived(orderData: Order){
    console.log(orderData);    
    for(let i = 0; i<this.products.length; i++){
      let orderDetail = new OrderProduct();
      orderDetail.order = orderData;
      orderDetail.product = this.products[i];
      
      this.orderService.addProductsToOrder(orderData.id, this.products[i].id, 1).subscribe(x => {
        this.orderDetails.push(x); 
        console.log("orderReceived OrderProduct: " + x);
          
      });         
    }    
  }

  updateProductQty(product: Product, quantity: any){
    this.orderDetails.find(x=>{
      x.product == product;
      x.productQty = quantity.productQty;
    })
  }


}
