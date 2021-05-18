import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = ()=>{

    const [enteredDescription,setEnteredDescription] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    //Same as mentioning event, in the function parameter, that is added to the event listener

    const descriptionChangeHandler = (event)=>{

        setEnteredDescription(event.target.value);

    }

    const amountChangeHandler = (event)=>{

        setEnteredAmount(event.target.value);

    }

    const dateChangeHandler = (event)=>{

        setEnteredDate(event.target.value);

    }
    return (

        <form>

            <div className = "new-expense__controls">

                <div className = "new-expense__control">
                    <label>Description</label>
                    <input type="text" onChange = {descriptionChangeHandler}></input>
                </div>

                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange = {amountChangeHandler}></input>
                </div>

                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onChange = {dateChangeHandler}></input>
                </div>

                <div className = "new-expense__actions">
                    <button type="submit"> Add Expense </button>
                </div>

            </div>


        </form>
    )
}

export default ExpenseForm;