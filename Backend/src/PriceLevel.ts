import { Order } from "./order/ordertype";

export class PriceLevel{
    price:number;
    orders: Order[] =[];

    constructor(price:number){
        this.price = price;
    }

    addOrder(order:Order){
        this.orders.push(order);
    }

    peekOrder(){
        return this.orders[0];
    }

    removeOrder(){
        return this.orders.shift();
    }

    isEmpty():boolean{
        return this.orders.length === 0;
    }
    
}