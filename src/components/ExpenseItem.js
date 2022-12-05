import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('ar-EG',{month:'long'})
    const dayOfWeek = props.date.toLocaleString('ar-EG',{weekday:'long'})
    const dayOfMonth = props.date.toLocaleString('ar-EG',{day:'numeric'})
    const itemDescription = props.description
    const price =props.price
    return (<div className='Expense-Item-Container'>
    <div className='Expense-Item-Date'>{month}</div>
    <div className='Expense-Item-Date'>{dayOfWeek  +" - "+dayOfMonth}</div>
    <div className='Expense-Item-Date'>{month}</div>
    <h2 className='Expense-Item-Description'>{itemDescription}</h2>
    <div className='Expense-Item-Price'>${price}</div>
        </div>
    );
}

export default ExpenseItem