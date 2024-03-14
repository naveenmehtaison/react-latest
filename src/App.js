import NewComponent from './componentss/Expenses/NewComponents'; 
import NewExpense from './componentss/NewExpenses/NewExpense';
import NewComponentDetails from './componentss/Expenses/NewComponentDetails';
import NewComponentDate from './componentss/Expenses/NewComponentDate';
import React, { useState } from 'react';
import ExpenseForm  from './componentss/NewExpenses/ExpenseForm';
 
// import SecondComponent from './componentss/SecondComponents';
const App =() => {

  
  const expenses = [
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"Car Insurance",
    expenseAmount : 928.32,
    LocationOfExpenditure : 'uttrakhnad'
    },
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"refrigerator",
    expenseAmount : 98.32,
    LocationOfExpenditure : 'uttrakhand'},
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"bike",
    expenseAmount : 818.32,
    LocationOfExpenditure :'uttrakhand'
    },
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"house",
    expenseAmount : 98000.32,
    LocationOfExpenditure : 'uttrakhand'},
  ]
 
  // React.render(<ExpenseForm />, document.getElementById('list'));
  const [enteredArr, setenteredArr]=useState(expenses)
  const AddExpenseHandler =(para1)=>{
    


    var new_obj = {
      expenseDate:new Date(para1.date),
      expenseTittle:para1.username,
      expenseAmount: para1.amount,
      LocationOfExpenditure :'uttrakhand',
      id: Math.random().toString()
    }
    setenteredArr((expenses)=>{

      return[...expenses,new_obj]
      
    })
    


  }

  return (
    
    <div >

      <NewExpense onSaving={AddExpenseHandler }/>
      {}
      {enteredArr.map((ele,i)=>(
        <NewComponent onSaving={AddExpenseHandler } date ={ele.expenseDate}
                tittle={ele.expenseTittle}
                amount={ele.expenseAmount}
                location={ele.LocationOfExpenditure}/>
      ))}
    </div>
  )

}
export default App;

