import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";
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
    <Card className="expenses">
      <NewExpense onAddExpenseHandler={ExpenseHandler}></NewExpense>
      <ExpensesFilter
        defaultSelected={filteredYear}
        onChangeFilter={FilterHandler}
      />

      {
  
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            description={expense.description}
            price={expense.price}
          />
        ))
        /* <ExpenseItem date = {props.expenses[0].date} id={props.expenses[0].id}description ={props.expenses[0].description} price ={props.expenses[0].price}></ExpenseItem>
 <ExpenseItem date =  {props.expenses[1].date} id= {props.expenses[1].id} description = {props.expenses[1].description} price = {props.expenses[1].price}></ExpenseItem>
 <ExpenseItem  date = {props.expenses[2].date} id ={props.expenses[2].id} description = {props.expenses[2].description} price = {props.expenses[2].price}></ExpenseItem>
 <ExpenseItem  date ={props.expenses[3].date} id = {props.expenses[3].id} description = {props.expenses[3].description} price = {props.expenses[3].price}></ExpenseItem> */
      }
    </Card>
  );
}

export default Expenses;
