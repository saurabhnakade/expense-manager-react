import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
    const [on, setOn] = useState(true);

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        clickHandler()
    };

    const clickHandler = () => {
        setOn((p) => !p);
        console.log('changed')
    };

    return (
        <div className="new-expense">
            {on ? (
                <div className="new-expense__actions_b">
                    <button onClick={clickHandler}>Add Expense</button>
                </div>
            ) : (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onButtonClick={clickHandler} />
            )}
        </div>
    );
};

export default NewExpense;
