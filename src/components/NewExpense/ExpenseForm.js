import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Handling States seperately

  /*const [ EnteredDescription , setDescription] = useState('');
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
  );*/

  //Handling States using one useState

  const [EnteredData, setData] = useState({
    description: "",
    date: "",
    price: "",
  });

  const descriptionChangeHandler = (event) => {
    // setData({
    //   ...EnteredData,
    //   description: event.target.value,
    // });
    setData((prevState) =>{
      return {
          ...EnteredData,
          description: event.target.value,
        }
    })
    console.log("Description = " + EnteredData.description);
  };

  const dateChangeHandler = (event) => {
    setData({ ...EnteredData, date: event.target.value });
    console.log("Date = " + EnteredData.date);
  };

  const priceChangeHandler = (event) => {
    setData({ ...EnteredData, price: event.target.value });
    console.log("Price = " + EnteredData.price);
  };

const submitHandler =(event) => {
  event.preventDefault()
  const expenseData = EnteredData
  expenseData.date =new Date(expenseData.date)
  console.log(expenseData)
  props.onExpenseFormHandler(expenseData)
   setData((prevState) =>{
    return {
      price:'',
      date:'',
      description:''
    }
   });
}

  return (
    <form className="new-expense__controls" onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Expense Description</label>
        <input
          type="text"
          placeholder="Telephone Tax"
          onChange={descriptionChangeHandler}
          value={EnteredData.description}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Expense Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2024-12-31"
          onChange={dateChangeHandler}
          value={EnteredData.date}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Expense Price</label>
        <input
          type="number"
          min="0.1"
          step="0.3"
          onChange={priceChangeHandler}
          value={EnteredData.price}
        ></input>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default ExpenseForm;
