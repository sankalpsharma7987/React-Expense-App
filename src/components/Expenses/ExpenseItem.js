import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    let title = props.title;

    const changeDescription = ()=>{

        title = 'Updated';
        console.log(title);
        
    }

    return (

        <Card className="expense-item">

            <ExpenseDate expenseDate={props.expenseDate}/>

            <div className="expense-item__description">
                <h2> {props.expenseDescription} </h2>
            </div>
            <div className="expense-item__price"> ${props.expenseAmount} </div>
            <button onClick = {changeDescription}>Change Title</button>
        </Card>

    );
}

export default ExpenseItem;