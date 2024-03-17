import React, {useState} from 'react'
import './NewComponent.css';
import NewComponentDate from './NewComponentDate.js';
import NewComponentDetails from './NewComponentDetails.js';
import Card from '../Ui/card.js';
import NewComponentFilter from './NewComponentFilter.js';

const NewComponent=(props)=> {


    return (
        <div>            
            <Card className='expenses'>                
                <div className='expense-item'>                            
                    <NewComponentDate date={props.date}/>
                    <NewComponentDetails amount={props.amount} 
                    location={props.location} 
                    tittle={props.tittle}                    
                    />
                </div>
            </Card>
        </div>
    );
}
export default NewComponent