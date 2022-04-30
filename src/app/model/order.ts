import { OrderProduct } from "./order-product";

export interface Order {
    id: number;
    name: string;
    dateSigned: Date;
    orderProducts: OrderProduct[];
}
