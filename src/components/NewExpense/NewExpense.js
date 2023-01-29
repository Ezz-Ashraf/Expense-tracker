import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

const ExpenseFormHandler=(expenseData) =>{
props.onAddExpenseHandler(expenseData)
}
return (
    <div className='new-expense'>
<ExpenseForm onExpenseFormHandler={ExpenseFormHandler}></ExpenseForm>
    </div>
)


}

export default NewExpense