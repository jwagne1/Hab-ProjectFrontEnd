import { OrderProduct } from "./order-product";

export class Order {
    id: number;
    name: string;
    dateSigned: Date;
    orderProducts: OrderProduct[];

    constructor(id: number,name: string, dateSigned: Date, orderProducts: OrderProduct[]){
        this.id = id;
        this.name = name;
        this.dateSigned = dateSigned;
        this.orderProducts = orderProducts;
    };
}
