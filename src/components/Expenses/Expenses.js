import { useState } from "react";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from './ExpenseChart';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const expenseFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (

    <div>

      <Card className="expenses">

        <ExpenseFilter
          defaultFilterValue={filteredYear}
          onFilterChange={expenseFilterChangeHandler}
        />
        <ExpenseChart expenses = {filteredExpenses}/>
        <ExpensesList items= {filteredExpenses}/>
        
      </Card>

    </div>
  );
};

export default Expenses;
