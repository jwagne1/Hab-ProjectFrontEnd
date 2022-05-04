import { Order } from "./order";
import { Product } from "./product";

export class OrderProduct {
    id: number;
    order: Order;
    product: Product;
    productQty: number;
    totalPrice: number;
    
    constructor(id: number, order: Order, product: Product, productQty: number, totalPrice: number){
        this.id = id;
        this.order = order;
        this.product = product;
        this.productQty = productQty;
        this.totalPrice = totalPrice;
    }
}
