import ExpenseItem from "./ExpenseItem"
import './expensesList.css'
function ExpensesList(props) {
if(props.filteredExpenses.length===0)
{
return <h2 className="expenses-list__fallback">No Expenses Found</h2>
}
else {
return  <ul className="expenses-list">
    {
props.filteredExpenses.map((expense) => {
         return <ExpenseItem
            key={expense.id}
            date={expense.date}
            description={expense.description}
            price={expense.price}
          />
})} 

</ul> }

}

export default ExpensesList