import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from 'react';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 139.37,
    date: new Date(2019, 7, 30)
  },
  {
    id: 'e2',
    title: 'Gasoline',
    amount: 40.59,
    date: new Date(2020, 7, 31)
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

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
