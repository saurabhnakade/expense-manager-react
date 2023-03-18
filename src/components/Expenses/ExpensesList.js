import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesList.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const ExpensesList = (props) => {
    const [year, setYear] = useState("2020");

    const filterChangeHandler = (year) => {
        setYear(year);
    };

    const filteredExpenses=props.expenses.filter(ex=>ex.date.getFullYear().toString() == year)

    let content=<p>NO EXPENSES FOUND !!</p>
    if(filteredExpenses.length>0){
        content = filteredExpenses.map((ex) => <ExpenseItem key={ex.id} item={ex} />)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={year}
                onFilterChange={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            {content}
        </Card>
    );
};

export default ExpensesList;
