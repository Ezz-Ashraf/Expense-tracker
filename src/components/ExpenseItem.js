import './ExpenseItem.css'

function ExpenseItem() {
    const itemDate = new Date(2022,10,22)
    const itemDescription = 'Car Insurance'
    const price = 470.25
    return (<div className='Expense-Item-Container'>
    <div className='Expense-Item-Date'>{itemDate.toISOString().slice(0,10)}</div>
    <h2 className='Expense-Item-Description'>{itemDescription}</h2>
    <div className='Expense-Item-Price'>${price}</div>
        </div>
    );
}

export default ExpenseItem