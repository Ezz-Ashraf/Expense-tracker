import  { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card"
function ExpenseItem(props) {

    const [ description , setDescription] = useState(props.description);

    const purchaseHandler = () => {
    setDescription("updated state");
    }
    const price =props.price
    return (<Card className='Expense-Item-Container'>
<ExpenseDate date ={props.date}/>
    <h2 className='Expense-Item-Description'>{description}</h2> 
    <button onClick={purchaseHandler}>Purchase</button>
    <div className='Expense-Item-Price'>${price}</div>
        </Card>
    );
}

export default ExpenseItem