import React from "react";
import { Transaction } from './Transaction';

export const TransactionList = ({ transactions = [] }) => {
  return (
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold mb-4">History</h3>
      <ul className="space-y-3">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
