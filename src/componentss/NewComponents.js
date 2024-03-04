import './NewComponent.css'
function NewComponent(){
    const expenseDate = new Date(2023, 3, 4)
    const expenseTittle = "Car Insurance"
    const expenseAmount = 928.32
    const LocationOfExpenditure = 'uttrakhnad'
    return (
        <div className='expense-item'>
            {/* <h1>Expense Tracker</h1> */}
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTittle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{ LocationOfExpenditure}</h2>
            </div>
        </div>
    
    )
    
}
export default NewComponent