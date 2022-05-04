import { getLocaleDateFormat } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Output() orderCreated = new EventEmitter<Order>();

  order: Order = new Order();

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  
  onCreatedOrder(){
        
    this.orderService.createOrder(this.order).subscribe(orderData=>{
      this.order = orderData;
      console.log("onCreateOrder: " + orderData.id);
      this.orderCreated.emit(orderData);    
    });
  }

}
