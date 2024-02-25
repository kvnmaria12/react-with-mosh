import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Lays',
      amount: 20,
      category: 'Groceries',
    },
    {
      id: 2,
      description: 'Hair Dryer',
      amount: 200,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'Movies',
      amount: 350,
      category: 'Entertainment',
    },
    {
      id: 4,
      description: 'Vegetables',
      amount: 180,
      category: 'Groceries',
    },
  ]);

  const deleteHandler = (id: number): void => {
    const filteredExpense = expenses.filter((expense) => expense.id != id);
    setExpenses(filteredExpense);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category == selectedCategory)
    : expenses;

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            { id: Math.floor(Math.random() * 100), ...expense },
          ])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
