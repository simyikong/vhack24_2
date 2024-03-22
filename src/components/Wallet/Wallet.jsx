import React, { useState } from 'react';
import { formatCurrency } from "../../utils/formatCurrency";

function Wallet() {
  const [totalBudget, setTotalBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [productTitle, setProductTitle] = useState('');
  const [productCost, setProductCost] = useState(0);

  const handleSetBudget = () => {
    if (totalBudget > 0) {
      setTotalBudget(totalBudget);
    }
  };

  const handleCheckAmount = () => {
    if (productTitle.trim() !== '' && productCost > 0) {
      const newExpense = { title: productTitle, cost: productCost };
      setExpenses([...expenses, newExpense]);
      setProductTitle('');
      setProductCost(0);
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
  const balance = totalBudget - totalExpenses;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded shadow-md p-6 mb-6">
          {/* Budget */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Budget</h3>
            <input
              type="number"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter Total Amount"
            />
            <button onClick={handleSetBudget} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Set Budget</button>
          </div>

          {/* Expenses */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Expenses</h3>
            <input
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
              placeholder="Enter Title of Product"
            />
            <input
              type="number"
              value={productCost}
              onChange={(e) => setProductCost(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
              placeholder="Enter Cost of Product"
            />
            <button onClick={handleCheckAmount} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Check Amount</button>
          </div>
        </div>

        {/* Output */}
        <div className="bg-white rounded shadow-md p-6 mb-6">
          <div className="flex justify-between mb-4">
            <div>
              <p>Total Budget</p>
              <span className="font-semibold">{formatCurrency(totalBudget)}</span>
            </div>
            <div>
              <p>Expenses</p>
              <span className="font-semibold">{formatCurrency(totalExpenses)}</span>
            </div>
            <div>
              <p>Balance</p>
              <span className="font-semibold">{formatCurrency(balance)}</span>
            </div>
          </div>

          {/* Expense List */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Expense List</h3>
            <div>
              {expenses.map((expense, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <p>{expense.title}</p>
                  <span>{formatCurrency(expense.cost)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
