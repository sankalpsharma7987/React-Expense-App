import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props)=> { 


    return (

        <Card className = "expenses">
        
        {
        props.expenses.map(expense=>{
            return <ExpenseItem expenseDate = {expense.date} expenseDescription = {expense.title} expenseAmount = {expense.amount}/>
        })
        }

        </Card>
    );
    
}

export default Expenses;