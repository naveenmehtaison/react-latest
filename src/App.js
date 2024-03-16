import NewComponent from './componentss/Expenses/NewComponents'; 
import NewExpense from './componentss/NewExpenses/NewExpense';
import NewComponentDetails from './componentss/Expenses/NewComponentDetails';
import NewComponentDate from './componentss/Expenses/NewComponentDate';
import React, { useState } from 'react';
import ExpenseForm  from './componentss/NewExpenses/ExpenseForm';
 import Card from './componentss/Ui/card';
// import SecondComponent from './componentss/SecondComponents';
import NewComponentFilter from './componentss/Expenses/NewComponentFilter';
const App =(props) => {
  console.log('im i app',props)

  
  const expenses = [
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"Car Insurance",
    expenseAmount : '$'+928.32,
    LocationOfExpenditure : 'uttrakhnad',
    id: Math.random().toString()
    },
    {expenseDate : new Date(2020, 3, 4),
    expenseTittle :"refrigerator",
    expenseAmount : '$'+98.32,
    LocationOfExpenditure : 'uttrakhand',
    id: Math.random().toString()},
    {expenseDate : new Date(2020, 3, 4),
    expenseTittle :"bike",
    expenseAmount : '$'+8918.32,
    LocationOfExpenditure :'uttrakhand',
    id: Math.random().toString()
    },
    {expenseDate : new Date(2019, 3, 4),
    expenseTittle :"house",
    expenseAmount : '$'+98000.32,
    LocationOfExpenditure : 'uttrakhand',
    id: Math.random().toString()}
  ]
 
  // React.render(<ExpenseForm />, document.getElementById('list'));
  const [enteredArr, setenteredArr]=useState(expenses)
  const AddExpenseHandler =(para1)=>{
    


    var new_obj = {

      expenseDate:new Date(para1.date),
      expenseTittle:para1.username,
      expenseAmount: '$'+para1.amount,
      LocationOfExpenditure :'uttrakhand',
      id: Math.random().toString()
    }
    setenteredArr((expenses3)=>{

      return[...expenses3,new_obj]
    })
    


  }
  const[filteredYear, setFilteredYear]=useState('2020')
  const filterChangeHandler = selectedYear => {

      setFilteredYear(selectedYear);
  };
  

  const  FilterYear =enteredArr.filter(enteredArr=>{
    return (enteredArr.expenseDate.getFullYear().toString()===filteredYear)
  })
  let Not_found = <p>Not found</p>
  if(FilterYear.length>0 && FilterYear.length!==1){
    Not_found=FilterYear.map((ele,i)=>(

      <NewComponent onSaving={AddExpenseHandler } 
              date ={ele.expenseDate}
              tittle={ele.expenseTittle}
              amount={ele.expenseAmount}
              key={ele.id}
              location={ele.LocationOfExpenditure}
        />
    ))
  }
  else if (FilterYear.length === 1) {
    (Not_found = (
        <div>
            {FilterYear.map((ele, i) => (
                <NewComponent
                    onSaving={AddExpenseHandler}
                    date={ele.expenseDate}
                    title={ele.expenseTitle}
                    amount={ele.expenseAmount}
                    key={ele.id}
                    location={ele.LocationOfExpenditure}
                />
            ))}
             <p>Only single Expense here. Please add more...</p>
        </div>
    ));
}

  return (
    
    <Card >
      <NewExpense onSaving={AddExpenseHandler }/>
      <NewComponentFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {Not_found}
      {/* {FilterYear.map((ele,i)=>(

        


          <NewComponent onSaving={AddExpenseHandler } 
                  date ={ele.expenseDate}
                  tittle={ele.expenseTittle}
                  amount={ele.expenseAmount}
                  key={ele.id}
                  location={ele.LocationOfExpenditure}/>
        ))} */}
    </Card>
  )

}
export default App;

