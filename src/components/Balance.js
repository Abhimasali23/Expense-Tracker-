import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";


export const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // total = total < 0 ? 0 : total;
  

  return (
    <>
      <h4>Your Current Balance</h4>
      {/* <h1>₹{total >= 0 ? total : 0 }</h1> */}
      <h1>₹{total}</h1>
    </>
  );
}
