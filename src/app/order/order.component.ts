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

  order!: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  
  onCreatedOrder(){
    let myDate = new Date();
    myDate.setMonth(4)
    myDate.setDate(28)
    myDate.setFullYear(2022)
    let newOrder = new Order(1,"customer1",myDate,[]);
    newOrder.dateSigned = myDate;
    newOrder.name = "Customer1";
    this.orderService.createOrder(newOrder).subscribe(data=>{
      this.order = data;
      console.log(data);
      
    });
  }
}
