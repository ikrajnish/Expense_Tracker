import React from "react";

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + 
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') + 
    '.' + p[1]
  );
}

export const Incomeexpense = ({ transactions = [] }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="flex justify-center gap-6 mb-6 bg-slate-200">
      <div className="text-center">
        <h4 className="font-semibold">Income</h4>
        <p className="text-green-500">{moneyFormatter(income)}</p>
      </div>
      <div className="text-center">
        <h4 className="font-semibold">Expense</h4>
        <p className="text-red-500">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
