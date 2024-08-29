import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';


export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newtransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount : +amount
        }

        addTransaction(newtransaction);
    }

    return (
        <>
            <form id="form" onSubmit={onSubmit}> 
                <div class="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
                </div>
                <div class="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}  placeholder="Enter amount..." />
                </div>
                <button class="btn">Add transaction</button>
            </form>
        </>
    )
}