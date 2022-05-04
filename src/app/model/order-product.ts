import { Order } from "./order";
import { Product } from "./product";

export class OrderProduct {
    id!: number;
    order!: Order;
    product!: Product;
    productQty!: number;
    totalPrice!: number;
    
 
}
