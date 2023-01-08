import ExpenseItem from "./ExpenseItem" 
import Card from "../UI/Card"
import './Expenses.css'

function Expenses(props) {

return (
    <Card className="expenses">
         <ExpenseItem date = {props.expenses[0].date} id={props.expenses[0].id}description ={props.expenses[0].description} price ={props.expenses[0].price}></ExpenseItem>
 <ExpenseItem date =  {props.expenses[1].date} id= {props.expenses[1].id} description = {props.expenses[1].description} price = {props.expenses[1].price}></ExpenseItem>
 <ExpenseItem  date = {props.expenses[2].date} id ={props.expenses[2].id} description = {props.expenses[2].description} price = {props.expenses[2].price}></ExpenseItem>
 <ExpenseItem  date ={props.expenses[3].date} id = {props.expenses[3].id} description = {props.expenses[3].description} price = {props.expenses[3].price}></ExpenseItem>
 
    </Card>
)

}

export default Expenses