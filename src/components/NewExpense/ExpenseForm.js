import  { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [ EnteredDescription , setDescription] = useState('');
  const [ EnteredDate , setDate] = useState('');
  const [ EnteredPrice , setPrice] = useState('');

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
    console.log("Description = "+EnteredDescription);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
    console.log("Date = "+EnteredDate);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value)
    console.log("Price = "+EnteredPrice);
  };

  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Expense Description</label>
        <input
          type="text"
          placeholder="Telephone Tax"
          onChange={descriptionChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Expense Date</label>
        <input type="date" min="2020-01-01" max="2024-12-31" onChange={dateChangeHandler}>
        </input>
      </div>
      <div className="new-expense__control">
        <label>Expense Price</label>
        <input type="number" min="0.1" step="0.3" onChange={priceChangeHandler}></input>
      </div>
    </form>
  );
};

export default ExpenseForm;
