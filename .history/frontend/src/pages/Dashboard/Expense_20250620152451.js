import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import DashboardLayout from '../../components/layout/DashboardLayout';

const Expense = () => {
  useUserAuth();

  const [expenseData, seExpenseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
      show: false,
      data: null,
    });
  
    const [openAddExpenseModal, setOpenAddIncomeModal] = useState(false);
  
  return (
    <DashboardLayout activeMenu="Expense">
      <div>

      </div>
    </DashboardLayout>
  )
}

export default Expense
