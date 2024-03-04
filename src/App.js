import NewComponent from './componentss/NewComponents';
// import SecondComponent from './componentss/SecondComponents';

function App() {
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
    <div>
      <h1>Lets get started</h1>
      
      <NewComponent
        tittle={expenses[0].expenseTittle}
        amount={expenses[0].expenseAmount}
        date={expenses[0].expenseDate}
        location={expenses[0].LocationOfExpenditure}
      ></NewComponent>
      <NewComponent
        tittle={expenses[1].expenseTittle}
        amount={expenses[1].expenseAmount}
        date={expenses[1].expenseDate}
        location={expenses[1].LocationOfExpenditure}
      ></NewComponent>
      <NewComponent
        tittle={expenses[2].expenseTittle}
        amount={expenses[2].expenseAmount}
        date={expenses[2].expenseDate}
        location={expenses[2].LocationOfExpenditure}
      ></NewComponent>
      <NewComponent
        tittle={expenses[3].expenseTittle}
        amount={expenses[3].expenseAmount}
        date={expenses[3].expenseDate}
        location={expenses[3].LocationOfExpenditure}
      ></NewComponent>
    </div>
  );
}
export default App;

