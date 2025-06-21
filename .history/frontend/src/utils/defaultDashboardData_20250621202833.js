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
      icon: "",
      type: "expense"
    },
    {
      _id: "tx2",
      category: "Salary",
      amount: 20000,
      date: "2025-06-01",
      icon: "",
      type: "income"
    },
    {
      _id: "tx3",
      category: "Utilities",
      amount: 300,
      date: "2025-06-18",
      icon: "",
      type: "expense"
    },
    {
      _id: "tx4",
      category: "Freelance",
      amount: 5000,
      date: "2025-06-10",
      icon: "",
      type: "income"
    },
    {
      _id: "tx5",
      category: "Dining",
      amount: 200,
      date: "2025-06-15",
      icon: "",
      type: "expense"
    }
  ],
  last60DaysIncome: {
    transactions: [
      {
        _id: "inc1",
        category: "Salary",
        amount: 20000,
        date: "2025-06-01",
        icon: ""
      },
      {
        _id: "inc2",
        category: "Freelance",
        amount: 10000,
        date: "2025-05-15",
        icon: ""
      },
      {
        _id: "inc3",
        category: "Bonus",
        amount: 3000,
        date: "2025-05-30",
        icon: ""
      },
      {
        _id: "inc4",
        category: "Investment",
        amount: 2500,
        date: "2025-05-20",
        icon: ""
      },
      {
        _id: "inc5",
        category: "Side Hustle",
        amount: 1500,
        date: "2025-06-05",
        icon: ""
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
        icon: ""
      },
      {
        _id: "exp2",
        category: "Transport",
        amount: 1200,
        date: "2025-06-10",
        icon: ""
      },
      {
        _id: "exp3",
        category: "Groceries",
        amount: 450,
        date: "2025-06-12",
        icon: "🛒"
      },
      {
        _id: "exp4",
        category: "Internet",
        amount: 600,
        date: "2025-06-08",
        icon: "🌐"
      },
      {
        _id: "exp5",
        category: "Entertainment",
        amount: 300,
        date: "2025-06-17",
        icon: "🎬"
      }
    ]
  }
};