import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul class="list">
        {transactions.map(transaction => (
          <Transaction transaction = {transaction} key={transaction.id}/>
        ))}
      </ul>
    </>
  )
}
