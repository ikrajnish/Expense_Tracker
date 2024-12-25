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

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={`flex justify-between items-center p-3 rounded-md ${transaction.amount < 0 ? 'bg-red-200' : 'bg-green-200'}`}>
            {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
            <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-400">
                x
            </button>
        </li>
    );
};
