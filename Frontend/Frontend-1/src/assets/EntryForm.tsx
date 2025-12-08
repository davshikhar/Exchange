import { useState } from "react";
export function OrderEntryForm({sendOrder}: {sendOrder: (order: {item: string, quantity: number}) => void}) {
    const [side, setSide] = useState("buy");
    const [price, setPrice] = useState(100);
    const [qty,setQty] = useState(1);

    return (
        <div>
            <select value = {side} onChange={e=>setSide(e.target.value)}>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
            </select>
        </div>
    )

}