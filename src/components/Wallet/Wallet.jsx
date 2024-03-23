import React, { useState } from 'react';
import { formatCurrency } from "../../utils/formatCurrency";
import { Box, Heading, Link as RouterLink, Image } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

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
    <div className="">
      <div className="bg-white rounded shadow-md p-6 mb-6 flex flex-col md:flex-row gap-6">

        {/* Budget */}
        <div className="bg-white rounded shadow-md p-6 mb-6 flex-1">
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
        <div className="bg-white rounded shadow-md p-6 mb-6 flex-1">
          <h3 className="text-lg font-semibold mb-2">Expenses</h3>
          <div className="flex mb-2">
            <input
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2"
              placeholder="Enter Title of Product"
            />
            <input
              type="number"
              value={productCost}
              onChange={(e) => setProductCost(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter Cost of Product"
            />
          </div>
          <button onClick={handleCheckAmount} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Check Amount</button>
        </div>


      </div>


      <div className="bg-white rounded shadow-md p-6 mb-6">
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
            <h3 className="text-lg font-semibold mb-2"><br></br>Expense List</h3>
            <table className="min-w-full divide-y divide-gray-200 border-separate ">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-left">{expense.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-left">{formatCurrency(expense.cost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div >
  );
}

export default Wallet;
