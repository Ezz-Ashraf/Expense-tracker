import React, { useState } from "react";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./expensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses= props.expenses.filter((expense)=>{
   return expense.date.getFullYear().toString() === filteredYear
  })
  const ExpenseHandler = (expenseData) => {
    props.onChangeExpenses(expenseData);
  };

  const FilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

 
  };



  return (
    <li>
    <Card className="expenses">
      <NewExpense onAddExpenseHandler={ExpenseHandler}></NewExpense>
      <ExpensesFilter
        defaultSelected={filteredYear}
        onChangeFilter={FilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />

<ExpensesList filteredExpenses={filteredExpenses}/>

      {

     
        /* <ExpenseItem date = {props.expenses[0].date} id={props.expenses[0].id}description ={props.expenses[0].description} price ={props.expenses[0].price}></ExpenseItem>
 <ExpenseItem date =  {props.expenses[1].date} id= {props.expenses[1].id} description = {props.expenses[1].description} price = {props.expenses[1].price}></ExpenseItem>
 <ExpenseItem  date = {props.expenses[2].date} id ={props.expenses[2].id} description = {props.expenses[2].description} price = {props.expenses[2].price}></ExpenseItem>
 <ExpenseItem  date ={props.expenses[3].date} id = {props.expenses[3].id} description = {props.expenses[3].description} price = {props.expenses[3].price}></ExpenseItem> */
      }
    </Card>
    </li>
  );
}

export default Expenses;
