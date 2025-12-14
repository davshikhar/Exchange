import { useState } from "react";
// export function OrderEntryForm({sendOrder}: {sendOrder: (order: {item: string, quantity: number}) => void}) {

interface sendOrder{
    item:string;
    type:string;
    quantity:number;
    price:number;
    timestamp:number;
}

export function OrderEntryForm(sendOrder: sendOrder) {
    const [side, setSide] = useState("buy");
    const [price, setPrice] = useState(0);
    const [qty,setQty] = useState(1);

    return (
        <div>
            <select value = {side} onChange={e=>setSide(e.target.value)}>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
            </select>

            <input type="number" value={price} onChange = {e => setPrice(Number(e.target.value))} />

            <input type="number" value={qty} onChange = {e => setQty(Number(e.target.value))}/>

            <button>Submit</button>
        </div>
    )

}