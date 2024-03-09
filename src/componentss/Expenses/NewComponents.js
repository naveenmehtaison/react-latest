import './NewComponent.css';
import NewComponentDate from './NewComponentDate.js';
import NewComponentDetails from './NewComponentDetails.js';
import Card from '../Ui/card.js';

const NewComponent=(props)=> {
    return (
        <div className='expense-item'>
            
            <NewComponentDate date={props.date}/>
            <NewComponentDetails amount={props.amount} location={props.location} tittle={props.tittle}/>
        </div>

    );
}
export default NewComponent