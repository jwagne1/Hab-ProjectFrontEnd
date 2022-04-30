import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrderProduct } from '../model/order-product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = "http://localhost:9092/orders"

  constructor(private httpClient: HttpClient) { }

  getOrderById(id: number): Observable<Order>{
    return this.httpClient.get<Order>(`${this.baseUrl}/${id}`);
  }

  createOrder(order: Order): Observable<Order>{
    return this.httpClient.post<Order>(`${this.baseUrl}`, order);
  }

  addProductsToOrder(orderId: number, productId: number, productQty: number): Observable<OrderProduct>{
    return this.httpClient.post<OrderProduct>(`${this.baseUrl}/${orderId}/products/${productId}`, productQty)
  }

  
}
