import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const expenseDate = props.item.date;
    const expenseTitle = props.item.title;
    const expenseAmount = props.item.amount;

    return (
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">
                    {expenseDate.toLocaleString("en-US", { month: "long" })}
                </div>
                <div className="expense-date__day">
                    {expenseDate.toLocaleString("en-US", { day: "2-digit" })}
                </div>
                <div className="expense-date__year">
                    {expenseDate.getFullYear()}
                </div>
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
