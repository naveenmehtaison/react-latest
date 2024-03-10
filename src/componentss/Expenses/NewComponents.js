import './NewComponent.css';
import NewComponentDate from './NewComponentDate.js';
import NewComponentDetails from './NewComponentDetails.js';
import Card from '../Ui/card.js';

const NewComponent=(props)=> {
    const DeleteExpense = () => {

        const prices = document.getElementsByClassName('expense-item__price');
        for (let i = 0; i < prices.length; i++) {
            const parentDescription = prices[i].parentElement;
            parentDescription.removeChild(prices[i]);
        }
    }
    
    
    return (
        <div className='expense-item'>
            
            <NewComponentDate date={props.date}/>
            <NewComponentDetails amount={props.amount} location={props.location} tittle={props.tittle}/>
            <button onClick={DeleteExpense}>DeleteExpense</button>
        </div>

    );
}
export default NewComponent