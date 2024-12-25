import React, { useState } from "react";

export const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);  // Reset form fields
  };

  return (
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold mb-4">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
        <div className="w-72">
          <label htmlFor="text" className="block text-sm">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="w-72">
          <label htmlFor="amount" className="block text-sm">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-green-400">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
