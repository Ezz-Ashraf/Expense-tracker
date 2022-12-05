import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    const itemDescription = props.description
    const price =props.price
    return (<div className='Expense-Item-Container'>
<ExpenseDate date ={props.date}/>
    <h2 className='Expense-Item-Description'>{itemDescription}</h2>
    <div className='Expense-Item-Price'>${price}</div>
        </div>
    );
}

export default ExpenseItem