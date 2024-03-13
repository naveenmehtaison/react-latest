import React, {useState} from "react";
import './ExpenseForm.css'
function ExpenseForm(){
    // const [userInput, setUserInput]=useState({
    //     enteredTittle:'',
    //     entereddate:'',
    //     enteredamount:''
    // })
    const [enteredTittle, setentredtittle]= useState('')
    const [enteredamount, setentredamount]= useState('')
    const [enteredTdate, setentreddate]= useState('')
    const handlename=(event)=>{
        setentredtittle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTittle:event.target.value
        // })
    }
    const handleamount=(event)=>{
        setentredamount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredamount:event.target.value
        // })
    }
    const handledate=(event)=>{
        setentreddate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTdate:event.target.value
        // })
    }

    function handleFormSubmit(event){
        event.preventDefault()
        const username = document.getElementById('username')
        const amount = document.getElementById('amount')
        const date = document.getElementById('date')
        const user_details = { username:username.value, amount:amount.value, date:date.value}
        console.log(user_details)
        const onsrc = document.getElementById('list')
        const onsrc2 = document.createElement('li')
        onsrc2.textContent=user_details.username +'-'+ user_details.amount + '-'+ user_details.date
        onsrc.appendChild(onsrc2)
    }


    return(
        <form onSubmit={handleFormSubmit}>
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
            <div>
                <li id='list'>

                </li>
            </div>

        </form>
    )



}
export default ExpenseForm

