import './NewComponent.css'
function NewComponentDetails(props){
    const tittle = props.tittle
    const amount = props.amount
    const location = props.location
    return(
    <div className='expense-item__description'>


        <div className='expense-item__description'>{tittle}</div>
        <div className='expense-item__price'>{amount}</div>
        <div className='expense-item__description'>{location}</div>
    </div>

    )
}
export default NewComponentDetails