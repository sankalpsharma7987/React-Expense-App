import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const expenseFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p> No expenses found </p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          expenseId={expense.id}
          expenseDate={expense.date}
          expenseDescription={expense.title}
          expenseAmount={expense.amount}
        />
      );
    });
  }

  return (

    <div>

      <Card className="expenses">

        <ExpenseFilter
          defaultFilterValue={filteredYear}
          onFilterChange={expenseFilterChangeHandler}
        />

        {expensesContent}
        
      </Card>
      
    </div>
  );
};

export default Expenses;
