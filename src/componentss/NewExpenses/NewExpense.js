import React, {useState} from 'react'
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{
    const saveExpensedataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        console.log(expenseData)
        props.onSaving(expenseData)
    }
    
    


    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpensedataHandler}/>

        </div>
    )
}
export default NewExpense