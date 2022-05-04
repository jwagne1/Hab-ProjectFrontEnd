import { OrderProduct } from "./order-product";

export class Order {
    id!: number;
    name: string | undefined;
    dateSigned: Date | undefined;
    orderProducts: OrderProduct[] | undefined;

    // constructor(name: string, dateSigned: Date, orderProducts: OrderProduct[]){
        
    //     this.name = name;
    //     this.dateSigned = dateSigned;
    //     this.orderProducts = orderProducts;
    // };
}
