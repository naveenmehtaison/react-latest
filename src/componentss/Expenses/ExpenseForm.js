import React from "react";
function ExpenseForm(){
    function handleFormSubmit(e){
        e.preventDefault();
        const username = document.getElementById('username')
        const amount = document.getElementById('amount')
        const date = document.getElementById('date')
        console.log(username.value,amount.value,date.value)
    }

    return(

        <form onSubmit = "handleFormSubmit(event)">
            <label for ='username'>Expense Tittle</label>
            <input id = 'username' type = 'text' onChange={handleFormSubmit}></input>
            <label for = 'amount'>Amount</label>
            <input id="amount" type='number' onChange={handleFormSubmit}></input>
            <label  for='date' type='date'></label>
            <input id='date' type = 'date' onChange={handleFormSubmit}></input>
            <button type='change'>Submit</button>
        </form>
    )



}
export default ExpenseForm

