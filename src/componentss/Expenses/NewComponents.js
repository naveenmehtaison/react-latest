import React, {useState} from 'react'
import './NewComponent.css';
import NewComponentDate from './NewComponentDate.js';
import NewComponentDetails from './NewComponentDetails.js';
import Card from '../Ui/card.js';

const NewComponent=(props)=> {
    const [tittle, setTittle]=useState(props.tittle)
    const [tittle2, setTittle2]=useState(props.amount)
    const clickHandler =()=>{
        setTittle('updated')

    }
    const clickHandler2 =()=>{
        setTittle2('$100')
        console.log(tittle2,setTittle2)

    }
    const DeleteExpense = () => {
        let k = props.amount


        const prices = document.getElementsByClassName('expense-item__price');
        for (let i = 0; i < prices.length; i++) {
            const parentDescription = prices[i].parentElement;
            if(prices[i].textContent==k){
                parentDescription.removeChild(prices[i]);
            }
            else{
                console.log(prices[i].textContent,k)
            }
        }
    }
    return (
        <div className='expense-item'>           
            <NewComponentDate date={props.date}/>
            <NewComponentDetails amount={tittle2} location={props.location} tittle={tittle}/>        
            <button onClick={DeleteExpense}>DeleteExpense</button><div className='expense-item__price'>{tittle2}</div>
            <button onClick={clickHandler}>ChangeTIttle</button>
            <button onClick={clickHandler2}>ChangeExpnese</button>
        </div>

    );
}
export default NewComponent