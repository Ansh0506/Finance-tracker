import React, { useState } from 'react';
import './App.css';

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' 
      ? acc + transaction.amount 
      : acc - transaction.amount;
  }, 0);

  const Income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  
  const Expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const addTransaction = () => {
    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      alert('Please enter valid description and amount');
      return;
    }

    const newTransaction = {
      id: Math.random(),
      description,
      amount: parseFloat(amount),
      type
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription('');
    setAmount('');
  };

  return (
    
    <div className="expense-tracker">
      <div className="container">
        <h1 className="title">Expense Tracker</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Current Balance</p>
                <p className={`stat-amount ${balance >= 0 ? 'positive' : 'negative'}`}>
                  ₹{balance.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Total Income</p>
                <p className="stat-amount positive">
                  ₹{Income.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Total Expenses</p>
                <p className="stat-amount negative">
                  ₹{Expenses.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-grid">
          {/* Add Transaction Form */}
          <div className="card">
            <h2 className="section-title">Add Transaction</h2>
            
            <div className="form-group">
              <label className="form-label">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description..."
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                step="0.01"
                min="0"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="form-select"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <button
              onClick={addTransaction}
              className="add-btn"
            >
              Add Transaction
            </button>
          </div>

          {/* Transaction History */}
          <div className="card">
            <div className="history-header">
              <h2 className="section-title">Transaction History</h2>
            </div>

            <div className="transaction-list">
              {transactions.length === 0 ? (
                <p className="empty-state">
                  No transactions yet. Add your first transaction!
                </p>
              ) : (
                transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className={`transaction-item ${transaction.type}`}
                  >
                    <div className="transaction-details">
                      <p className="transaction-desc">
                        {transaction.description}
                      </p>
                    </div>
                    <div className="transaction-right">
                      <span className={`transaction-amount ${transaction.type}`}>
                        {transaction.type === 'income' ? '+' : '-'}₹
                        {transaction.amount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}