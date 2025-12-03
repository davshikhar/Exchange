import { WebSocketServer } from "ws";
import { Match } from "./Match";
import { Order } from "./order/ordertype";
import { randomUUID } from "crypto";

const ws = new WebSocketServer({port:8080});
const match = new Match();

ws.on("connection", socket =>{
    socket.on("message", message=>{
        const order: Order = JSON.parse(message.toString());
        order.id = randomUUID();
        order.timestamp = Date.now();

        const trades = match.matchOrder(order);

        const payload = {
            orderBook: match.orderBook,
            trades,
        };

        ws.clients.forEach(client => {
            client.send(JSON.stringify(payload));
        });
    });
});
