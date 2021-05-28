const ExpenseAddFormButton = (props) => {

  const changeNewExpensesContent = ()=>{

    props.onToggleForm(true);

  }  
  return (

    <div className="new-expense__actions">
      <button onClick = {changeNewExpensesContent}> Add New Expenses </button>
    </div>

  );
};

export default ExpenseAddFormButton;
