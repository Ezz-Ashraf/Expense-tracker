import "./ExpenseForm.css";

const ExpenseForm = () => {
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Expense Description</label>
        <input
          type="text"
          placeholder="Telephone Tax"
          onChange={inputChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Expense Date</label>
        <input type="date" min="2020-01-01" max="2024-12-31"></input>
      </div>
      <div className="new-expense__control">
        <label>Expense Price</label>
        <input type="number" min="0.1" step="0.3"></input>
      </div>
    </form>
  );
};

export default ExpenseForm;
