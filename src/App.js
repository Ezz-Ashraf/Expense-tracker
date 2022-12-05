import Expenses from './components/Expenses'

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
<Expenses expenses ={expenses}/>
  </div>
  );
}

export default App;
