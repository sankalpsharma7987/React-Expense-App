import {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    //useState returns the current state value and the function which can be called to update the value

   const [expenseDescription,setExpenseDescription] =  useState(props.expenseDescription); //useState is a React Hook
   console.log(useState(props.expenseDescription));
    

    const changeDescription = ()=>{

        
        setExpenseDescription('Updated');
        
        
    }

    return (

        <Card className="expense-item">

            <ExpenseDate expenseDate={props.expenseDate}/>

            <div className="expense-item__description">
                <h2> {expenseDescription} </h2>
            </div>
            <div className="expense-item__price"> ${props.expenseAmount} </div>
            <button onClick = {changeDescription}>Change Title</button>
        </Card>

    );
}

export default ExpenseItem;