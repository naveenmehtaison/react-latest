import React from 'react'
import NewComponent from './NewComponents'
import './New_Components_list.css'
const NewComponentlist=(props)=>{
    let Not_found = <p>Not found</p>
    if(props.items.length===0){
      return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    else if (props.items.length === 1) {

          return(<div>
              {props.items.map((ele, i) => (
                  <NewComponent
                      // onSaving={AddExpenseHandler}
                      date={ele.expenseDate}
                      title={ele.expenseTitle}
                      amount={ele.expenseAmount}
                      key={ele.id}
                      location={ele.LocationOfExpenditure}
                  />
              ))}
               <p>Only single Expense here. Please add more...</p>
          </div>)

    } 

    return(
      <ul className='expenses-list'>
          <div>
              {props.items.map((ele, i) => (
                  <NewComponent
                      // onSaving={AddExpenseHandler}
                      date={ele.expenseDate}
                      title={ele.expenseTitle}
                      amount={ele.expenseAmount}
                      key={ele.id}
                      location={ele.LocationOfExpenditure}
                  />
              ))}
              
          </div>
      </ul>
    )
}
export default NewComponentlist