import './NewComponent.css'
function NewComponent(props){

    return (
        <div className='expense-item'>
            {/* <h1>Expense Tracker</h1> */}
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.tittle}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.location}</h2>
            </div>
        </div>
    
    )
    
}
export default NewComponent