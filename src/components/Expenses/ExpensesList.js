import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";

const ExpensesList = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map((ex) => {
                return <ExpenseItem key={ex.id} item={ex} />;
            })}
        </Card>
    );
};

export default ExpensesList;
