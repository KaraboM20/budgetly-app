import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import IncomeOverview from '../../components/Income/IncomeOverview';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import IncomeList from '../../components/Income/IncomeList';
import Modal from '../../components/Modal';
import DeleteAlert from '../../components/DeleteAlert';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import { useUserAuth } from '../../hooks/useUserAuth';
import './Income.css';
import { defaultDashboardData } from '../../utils/defaultDashboardData';
import Last30DaysExpenses from "../../components/Expense/Last30DaysExpenses"; // adjust path as needed


const Income = () => {
  useUserAuth();

  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  const fetchIncomeDetails = async () => {
  if (loading) return;

  setLoading(true);

  try {
    const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
    console.log("Income API response:", response.data);

    if (response.data && response.data.length > 0) {
      setIncomeData(response.data);
    } else {
      // Backend empty, use mock data fallback
      setIncomeData(defaultDashboardData.last60DaysIncome.transactions);
    }
  } catch (error) {
    console.log("Something went wrong. Please try again.", error);
    // Also fallback to mock data on error (optional)
    setIncomeData(defaultDashboardData.last60DaysIncome.transactions);
  } finally {
    setLoading(false);
  }
};

  const handleAddIncome = async(income) => {
  console.log("🚀 handleAddIncome triggered with:", income); // ✅ Debug here

  const { source, amount, date, icon } = income;

  if (!source.trim()) {
    toast.error("Source is required.");
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
    await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
      source,
      amount,
      date,
      icon,
    });

    toast.success("Income added successfully");
    setOpenAddIncomeModal(false);
    fetchIncomeDetails();
  } catch (error) {
    console.error(
      "Error adding income:",
      error.response?.data?.message || error.message
    );
  }
};


  const deleteIncome = async (id) => {
    try { 
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id))

       setOpenDeleteAlert({ show: false, data: null });
       toast.success("Income details deleted successfully");
       fetchIncomeDetails();
    } catch (error) {
      console.error (
        "Error deleting income:",
        error.respond?.data?.message || error.message
      );
    }
  };

  const handleDownloadIncomeDetails = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.INCOME.DOWNLOAD_INCOME, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "income_details.xlsx");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading income details:", error);
    toast.error("Failed to download income details. Please try again");
  }
};


  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="income-page">
        <div className="income-page-header">
          <div>
            <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>

          <IncomeList
          transactions={incomeData}
          onDelete={(id) => {
            setOpenDeleteAlert({ show: true, data: id});
          }}
          onDownload={handleDownloadIncomeDetails}
          />

        </div>

        <Modal 
  isOpen={openAddIncomeModal}
  onClose={() => setOpenAddIncomeModal(false)}
  title="Add Income"
>
  <AddIncomeForm onAddIncome={handleAddIncome} />
</Modal>

        <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenAddIncomeModal({show:false, data: null})}
        title="Delete Income"
        >

        <DeleteAlert 
        content="Are you sure you want to delete this income details?"
        onDelete={() => deleteIncome(openDeleteAlert.data)}
        />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income
