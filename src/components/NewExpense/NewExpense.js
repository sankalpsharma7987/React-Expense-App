import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseAddFormButton from './ExpenseAddFormButton';
import './NewExpense.css';


const NewExpense = (props)=>{

    let newExpenseContent;

    const [isShowExpenseForm,setShowExpenseForm] = useState(false);
    
    const toggleExpenseForm = (flag)=>{

        if(flag)
        {
            setShowExpenseForm(flag);

         

        }

        else
        {
            setShowExpenseForm(flag);
           

        }
       

    }
    

    const saveExpenseDataHandler = (enteredExpenseData)=>{

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        toggleExpenseForm(false);

    }
    
    if(isShowExpenseForm)
    {
        newExpenseContent = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onToggleForm = {toggleExpenseForm}/>
    }

    else
    {
        newExpenseContent = <ExpenseAddFormButton onToggleForm = {toggleExpenseForm}/>
    }
    

    return <div className = "new-expense">
       
        {newExpenseContent}    
       
    </div>

}

export default NewExpense;