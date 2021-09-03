import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Groceries',
      amount: 139.37,
      date: new Date(2021, 7, 30)
    },
    {
      id: 'e2',
      title: 'Gasoline',
      amount: 40.59,
      date: new Date(2021, 7, 31)
    },
    {
      id: 'e3',
      title: 'Internet',
      amount: 20.00,
      date: new Date(2021, 8, 1)
    },
    {
      id: 'e4',
      title: 'Computer',
      amount: 200.00,
      date: new Date(2021, 8, 1)
    }
  ];


  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
