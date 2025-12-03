import { Order } from "./order/ordertype";
import { PriceLevel } from "./PriceLevel";

export class Book{
    bid:Map<number,PriceLevel> = new Map();
    ask:Map<number, PriceLevel> = new Map();

    getBestBid(){
        //this function returns the highest price from the bid map
        return Math.max(...this.bid.keys(), -Infinity);
    }

    getBestAsk(){
        //returns the lowest price from the ask map
        return Math.min(...this.ask.keys(), Infinity);
    }

    addOrder(order:Order){
        const booktype = order.type === 'buy' ? this.bid : this.ask;
        if(!booktype.has(order.price)){
            booktype.set(order.price, new PriceLevel(order.price));
        }
        booktype.get(order.price)?.addOrder(order);
    }

    removeEmpty(){
        [...this.bid.entries()].forEach(([p, level])=>{
            if(level.isEmpty()) this.bid.delete(p);
        });
        [...this.ask.entries()].forEach(([p, level])=>{
            if(level.isEmpty()) this.ask.delete(p);
        });
    }
    
}