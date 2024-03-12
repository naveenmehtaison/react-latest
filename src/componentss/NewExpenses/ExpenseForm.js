import React, {useState} from "react";
import './ExpenseForm.css'
function ExpenseForm(){
    const [enteredTittle, setentredtittle]= useState('')
    const [enteredamount, setentredamount]= useState('')
    const [enteredTdate, setentreddate]= useState('')
    const handlename=(event)=>{
        setentredtittle(event.target.value)
    }
    const handleamount=(event)=>{
        setentredamount(event.target.value)
    }
    const handledate=(event)=>{
        setentreddate(event.target.value)
    }

    function handleFormSubmit(){

        
        const username = document.getElementById('username')
        const amount = document.getElementById('amount')
        const date = document.getElementById('date')
        const user_details = { username:username.value, amount:amount, date:date}

    }

    return(

        <form >
            <div >
                <div className="new-expense__control">
                <label for ='username'>Expense Tittle</label>
                <input id = 'username' type = 'text' onChange={handlename}></input>
                </div>
                <div className="new-expense__control">
                <label for = 'amount'>Amount</label>
                <input id="amount" type='number' onChange={handleamount}></input>
                </div>
                <div className="new-expense__control">
                <label  for='date' type='date' min='2019-01-01' max='2022-12-31'></label>
                <input id='date' type = 'date' onChange={handledate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>

            </div>

        </form>
    )



}
export default ExpenseForm

