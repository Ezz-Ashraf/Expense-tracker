import'./ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('ar-EG',{month:'long'})
    const dayOfWeek = props.date.toLocaleString('ar-EG',{weekday:'long'})
    const dayOfMonth = props.date.toLocaleString('ar-EG',{day:'numeric'})
    const year = props.date.toLocaleString('ar-EG',{year:'numeric'})

return (
    <div className='Expense-Item-Date'>
    <div className='Expense-Date-text-large'>{year}</div>
<div  className='Expense-Date-text-small' >{dayOfWeek  +" - "+dayOfMonth +" -"+month}</div>
</div>
)
}


export default ExpenseDate