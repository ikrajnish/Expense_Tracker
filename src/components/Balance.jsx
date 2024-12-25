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

export const Balance = ({ transactions = [] }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold">YOUR BALANCE</h3>
      <h2 className="text-2xl font-bold">{moneyFormatter(total)}</h2>
    </div>
  );
};
