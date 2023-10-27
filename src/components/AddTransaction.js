import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
      setText(" ");
      setDate(0);
      setAmount();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        date,
        amount: +amount
      }

      addTransaction(newTransaction)
    }

  return (
    <>
      <h3 id="add">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="text">Select Date</label>
          <br></br>
          <input 
            type={"date"} 
            value={date} 
            onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
