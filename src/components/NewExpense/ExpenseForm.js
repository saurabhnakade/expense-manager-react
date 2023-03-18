import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');

    const titleChangeHandler=(e)=>{
        setTitle(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setDate(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        const expenseData={
            title:title,
            amount:+amount,
            date:new Date(date)
        }

        setTitle('')
        setAmount('')
        setDate('')

        props.onSaveExpenseData(expenseData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={title} type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={date} type="date" min="2019-01-01" max="2023-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onButtonClick} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
