import './NewComponent.css'
const  NewComponentDetails=(props)=>{


    return(
        <div >
            <div className='expense-item__description'>
                <h2>{props.tittle}</h2>
                <h2>{props.location}</h2>
                
                
            </div>
            
    
        </div>
    
      )
}
export default NewComponentDetails