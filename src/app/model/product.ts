import { OrderProduct } from "./order-product";

export interface Product {
    id: number;
    name: string;
    price: number;
    orderProducts: OrderProduct[]; 
}
