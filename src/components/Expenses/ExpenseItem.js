import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {


    return (

        <Card className="expense-item">

            <ExpenseDate expenseDate={props.expenseDate}/>

            <div className="expense-item__description">
                <h2> {props.expenseDescription} </h2>
            </div>
            <div className="expense-item__price"> ${props.expenseAmount} </div>
            
        </Card>

    );
}

export default ExpenseItem;