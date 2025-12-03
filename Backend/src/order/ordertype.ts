export type OrderType = "buy" | "sell";

export interface Order{
    id:string;
    type:OrderType;
    quantity:number;
    price:number;
    timestamp:number;
}

export interface Trade{
    buyOrderId:string;
    sellOrderId:string;
    quantity:number;
    price:number;
    timestamp:number;
}
