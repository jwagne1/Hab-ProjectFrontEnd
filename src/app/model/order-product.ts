import { Order } from "./order";
import { Product } from "./product";

export interface OrderProduct {
    id: number;
    order: Order;
    product: Product;
    productQty: number;
    
}
