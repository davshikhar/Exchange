import { useEffect, useState } from "react";

export function useExhangeFeed(){
    const [orderBook, setOrderBook] = useState<any>(null);
    const [trades, setTrades] = useState<any[]>([]);

    useEffect(()=>{
        const ws = new WebSocket("ws://localhost:8080");

        ws.onmessage = (event) =>{
            const data = JSON.parse(event.data);
            setOrderBook(data.orderBook);
            setTrades(prev => [...data.trades,...prev]);
        };

        return () =>{
            ws.close();
        }
    },[]);

    return {orderBook, trades};
}