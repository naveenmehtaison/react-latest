import NewComponent from './componentss/Expenses/NewComponents'; 
import NewComponentDetails from './componentss/Expenses/NewComponentDetails';
import NewComponentDate from './componentss/Expenses/NewComponentDate';

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
    LocationOfExpenditure : 'uttrakhnad'},
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"bike",
    expenseAmount : 818.32,
    LocationOfExpenditure : 'uttrakhnad'
    },
    {expenseDate : new Date(2023, 3, 4),
    expenseTittle :"house",
    expenseAmount : 98000.32,
    LocationOfExpenditure : 'uttrakhnad'}
  ]

  return (
    <div >


      {expenses.map((ele,i)=>(
        <NewComponent date ={ele.expenseDate}
                tittle={ele.expenseTittle}
                amount={ele.expenseAmount}
                location={ele.LocationOfExpenditure}/>
      ))}
    </div>
  )

}
export default App;

