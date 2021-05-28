import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    const [enteredDescription,setEnteredDescription] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredDescription: '',
    //     enteredAmount: '',
    //     enteredDate:''
    // })

    //Same as mentioning event, in the function parameter, that is added to the event listener

    const descriptionChangeHandler = (event)=>{

        setEnteredDescription(event.target.value);
        
        // setUserInput ({

        //     ...userInput,
        //     enteredDescription: event.target.value

        // })

        // setUserInput((prevState)=>{

        //     return {...prevState,enteredDescription:event.target.value}

        // })

    }

    const amountChangeHandler = (event)=>{

        setEnteredAmount(event.target.value);

        // setUserInput ({
            
        //     ...userInput,
        //     enteredAmount: event.target.value

        // })

        
        // setUserInput((prevState)=>{

        //     return {...prevState,enteredAmount:event.target.value}

        // })


    }

    const dateChangeHandler = (event)=>{

        setEnteredDate(event.target.value);

        // setUserInput ({
            
        //     ...userInput,
        //     enteredDate: event.target.value

        // })

        // setUserInput((prevState)=>{

        //     return {...prevState,enteredDate:event.target.value}

        // })

    }

    const submitHandler = (event)=>{

        event.preventDefault();
        const expenseData = {amount: enteredAmount,date: new Date(enteredDate),title: enteredDescription}
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredDescription('');
        
    }

    const changeNewExpensesContent = ()=>{

        props.onToggleForm(false);

    }

    return (

        <form onSubmit = {submitHandler}>

            <div className = "new-expense__controls">

                <div className = "new-expense__control">
                    <label>Description</label>
                    <input type="text"
                    value = {enteredDescription}
                    onChange = {descriptionChangeHandler}
                    />
                </div>

                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                    value = {enteredAmount}
                    onChange = {amountChangeHandler}/>
                </div>

                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                    value = {enteredDate}
                    onChange = {dateChangeHandler}/>
                </div>

                <div className = "new-expense__actions">
                    <button type="button" onClick = {changeNewExpensesContent}> Cancel </button>
                    <button type="submit"> Add Expense </button>
                </div>

            </div>


        </form>
    )
}

export default ExpenseForm;