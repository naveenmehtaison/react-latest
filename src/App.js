
import NewComponent from './componentss/NewComponents';
// import SecondComponent from './componentss/SecondComponents';

function App() {
  const expenses = [
    {
      expenseDate: new Date(2023, 3, 4),
      expenseTittle: "Car Insurance",
      expenseAmount: 928.32,
      LocationOfExpenditure: 'uttrakhnad'
    },
    {
      expenseDate: new Date(2023, 3, 4),
      expenseTittle: "refrigerator",
      expenseAmount: 98.32,
      LocationOfExpenditure: 'uttrakhnad'
    },
    {
      expenseDate: new Date(2023, 3, 4),
      expenseTittle: "bike",
      expenseAmount: 818.32,
      LocationOfExpenditure: 'uttrakhnad'
    },
    {
      expenseDate: new Date(2023, 3, 4),
      expenseTittle: "house",
      expenseAmount: 98000.32,
      LocationOfExpenditure: 'uttrakhnad'
    }
  ];

  const expenseComponents = [];

  for (var i = 0; i < expenses.length; i++) {
    expenseComponents.push(
      <NewComponent
        key={i} 
        tittle={expenses[i].expenseTittle}
        amount={expenses[i].expenseAmount}
        date={expenses[i].expenseDate}
        location={expenses[i].LocationOfExpenditure}
      />
    );
  }
  console.log(expenseComponents)

  return (
    <div>
      <h1>Lets get started</h1>
      {expenseComponents}
    </div>
  );
}
export default App;
