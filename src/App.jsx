import './App.css';
import { useState } from 'react';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { Incomeexpense } from './components/Incomeexpense';
import { TransactionList } from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([
  ]);

  // Add transaction handler
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <Header />
        <Balance transactions={transactions} />
        <Incomeexpense transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
