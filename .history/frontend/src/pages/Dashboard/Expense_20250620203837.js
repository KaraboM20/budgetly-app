import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import DashboardLayout from '../../components/layout/DashboardLayout';
import ExpenseOverview from '../../components/Expense/ExpenseOverview';
import Modal from '../../components/Modal';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import toast from 'react-hot-toast';
import ExpenseList from '../../components/Expense/ExpenseList';

const Expense = () => {
  useUserAuth();

  const [expenseData, seExpenseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
      show: false,
      data: null,
    });
  
    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

    const fetchExpenseDetails = async () => {
    if (loading) return;

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`
      );

      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async(expense) => {
    const { category, amount, date, icon } = expense;

    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });

      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails();
    } catch (error) {
      console.error (
        "Error adding expense:",
        error.response?.data?.message || error.message
      );
    }
  };

  const deleteExpense = async (id) => {
    try { 
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));

       setOpenDeleteAlert({ show: false, data: null });
       toast.success("Expense details deleted successfully");
       fetchExpenseDetails();
    } catch (error) {
      console.error (
        "Error deleting expense:",
        error.respond?.data?.message || error.message
      );
    }
  };

  const handleDownloadExpenseDetails = async () => {
    const handDownloadExpenseDetails = () => 
  };

  useEffect(() => {
    fetchIncomeDetails();

    return () => {};
  }, []);


  useEffect(() => {
    fetchExpenseDetails()
      return () => {};
    
  }, []);
  
  return (
    <DashboardLayout activeMenu="Expense">
      <div>
        <div>
          <div>
            <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={() => setOpenAddExpenseModal(true)}
            />
          </div>

          <ExpenseList 
          transactions={expenseData}
          onDelete={(id) => {
            setOpenDeleteAlert({ show: true, data: id });
          }}
          onDownload={handDownloadExpenseDetails}
          />
        </div>

        <Modal
        isOpen={openAddExpenseModal}
        onClose={() => setOpenAddExpenseModal(false)}
        title="Add Expense"
        >
          <AddExpenseForm onAddExpense={handleAddExpense} />
        </Modal>

        <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenAddExpenseModal({show:false, data: null})}
        title="Delete Expense"
        >

        <DeleteAlert 
        content="Are you sure you want to delete this expense details?"
        onDelete={() => deleteExpense(openDeleteAlert.data)}
        />
        </Modal>

      </div>
    </DashboardLayout>
  )
}

export default Expense
