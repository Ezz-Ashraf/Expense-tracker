import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id:'e1',
      date:new Date(2022,10,22),
      description:'Car Insurance',
      price:202.75
    },
    {
      id:'e2',
      date:new Date(2021,5,22),
      description:'Internet Money',
      price:155.75
    },
    {
      id:'e3',
      date:new Date(2021,7,12),
      description:'Food',
      price:305.75
    },
    {
      id:'e4',
      date:new Date(2023,0,22),
      description:'School Expenses',
      price:202.75
    }
  ]
  return (
    <div>
 <h1>Hello World</h1>
 <ExpenseItem date = {expenses[0].date} id={expenses[0].id}description ={expenses[0].description} price ={expenses[0].price}></ExpenseItem>
 <ExpenseItem date =  {expenses[1].date} id= {expenses[1].id} description = {expenses[1].description} price = {expenses[1].price}></ExpenseItem>
 <ExpenseItem  date = {expenses[2].date} id ={expenses[2].id} description = {expenses[2].description} price = {expenses[2].price}></ExpenseItem>
 <ExpenseItem  date ={expenses[3].date} id = {expenses[3].id} description = {expenses[3].description} price = {expenses[3].price}></ExpenseItem>
  </div>
  );
}

export default App;
