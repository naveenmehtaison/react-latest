import './NewComponent.css'
const  NewComponentDetails=(props)=>{


    return(
        <div >
            <div className='expense-item__description'>
                <div className='expense-item__price'>{props.amount}</div>
                <h2>{props.tittle}</h2>
                <h2>{props.location}</h2>
                   
                
                
                
            </div>
            
    
        </div>
    
      )
}
export default NewComponentDetails