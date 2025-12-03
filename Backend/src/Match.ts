import { Book } from "./Book";
import { Order, Trade } from "./order/ordertype";


export class Match{
    //this class represents a matched trade
    order = new Book();
    trades:Trade[] = [];

    matchOrder(order:Order):Trade[]{
        const trades:Trade[] = [];
        if(order.type === "buy"){
            //here matching is done against the asked price
            if(order.quantity > 0 && order.price >= this.order.getBestAsk()){
                const bestAskPrice = this.order.getBestAsk();
                const level = this.order.ask.get(bestAskPrice);
                const topOrder = level?.peekOrder();

                const execQty = Math.min(order.quantity, topOrder!.quantity);

                trades.push({
                    buyOrderId: order.id,
                    sellOrderId: topOrder!.id,
                    price: bestAskPrice,
                    quantity: execQty,
                    timestamp: Date.now()
                });

                //updating the quantities
                order.quantity -= execQty;
                topOrder!.quantity -= execQty;

                //removing the top order if fully filled
                
            }
        }
        return trades;
    }
}