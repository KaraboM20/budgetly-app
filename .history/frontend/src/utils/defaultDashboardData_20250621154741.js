// utils/defaultDashboardData.js

export const defaultDashboardData = {
  totalBalance: 25000,
  totalIncome: 40000,
  totalExpense: 15000,
  recentTransactions: [
    {
      _id: "tx1",
      category: "Groceries",
      amount: 500,
      date: "2025-06-20",
      icon: "🛒",
      type: "expense"
    },
    {
      _id: "tx2",
      category: "Salary",
      amount: 20000,
      date: "2025-06-01",
      icon: "💼",
      type: "income"
    },
  ],
  last60DaysIncome: {
    transactions: [
      {
        _id: "inc1",
        category: "Salary",
        amount: 20000,
        date: "2025-06-01",
        icon: "💼"
      },
      {
        _id: "inc2",
        category: "Freelance",
        amount: 10000,
        date: "2025-05-15",
        icon: "🧑‍💻"
      }
    ]
  },
  last30DaysExpense: {
    transactions: [
      {
        _id: "exp1",
        category: "Rent",
        amount: 7000,
        date: "2025-06-05",
        icon: "🏠"
      },
      {
        _id: "exp2",
        category: "Transport",
        amount: 1200,
        date: "2025-06-10",
        icon: "🚗"
      }
    ]
  }
};
