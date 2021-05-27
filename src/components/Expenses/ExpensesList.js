import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses Found </h2>;
  }

  return (

    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expenseId={expense.id}
            expenseDate={expense.date}
            expenseDescription={expense.title}
            expenseAmount={expense.amount}
          />
        );
      })}
    </ul>
    
  );

};

export default ExpensesList;
