import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import IncomeOverview from '../../components/Income/IncomeOverview';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import IncomeList from '../../components/Income/IncomeList';
import Modal from '../../components/Modal';
import DeleteAlert from '../../components/DeleteAlert';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import { useUserAuth } from '../../hooks/useUserAuth';
import RecentIncome from '../../components/Dashboard/RecentIncome';
import { defaultDashboardData } from '../../utils/defaultDashboardData';
import './Income.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const Income = () => {
  useUserAuth();
  const [incomeData, setIncomeData] = useState(defaultDashboardData.last60DaysIncome.transactions);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      setIncomeData(response.data && response.data.length > 0 
        ? response.data 
        : defaultDashboardData.last60DaysIncome.transactions);
    } catch (error) {
      console.error("Failed to fetch income:", error);
      setIncomeData(defaultDashboardData.last60DaysIncome.transactions);
    } finally {
      setLoading(false);
    }
  };

  const handleAddIncome = async (income) => {
    const { source, amount, date, icon } = income;
    if (!source?.trim()) return toast.error("Source is required.");
    if (!amount || isNaN(amount) || Number(amount) <= 0) return toast.error("Amount must be a valid number.");
    if (!date) return toast.error("Date is required.");
    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source, 
        amount: Number(amount),
        date,
        icon: icon || '💰',
      });
      toast.success("Income added");
      setOpenAddIncomeModal(false);
      fetchIncomeDetails();
    } catch (error) {
      console.error("Error adding income:", error.response?.data?.message || error.message);
      toast.error("Failed to add income");
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      toast.success("Deleted");
      setOpenDeleteAlert({ show: false, data: null });
      fetchIncomeDetails();
    } catch (error) {
      console.error("Error deleting income:", error);
      toast.error("Failed to delete income");
    }
  };

  const handleDownloadIncomeDetails = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.DOWNLOAD_INCOME, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "income_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      toast.error("Download failed");
    }
  };

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  const barChartData = incomeData.reduce((acc, item) => {
    const existing = acc.find(e => e.source === item.source);
    if (existing) {
      existing.amount += item.amount;
    } else {
      acc.push({ source: item.source, amount: item.amount });
    }
    return acc;
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="income-page">
        <div className="income-page-header">
          <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
          <IncomeList
            transactions={incomeData}
            onDelete={(id) => setOpenDeleteAlert({ show: true, data: id })}
            onDownload={handleDownloadIncomeDetails}
          />
          <RecentIncome transactions={incomeData} />
        </div>
        <div className="income-chart-section">
          <h3 className="chart-title">Income by Source</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              layout="vertical"
              data={barChartData}
              margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="source" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="amount" fill="#4CAF50" barSize={24} />
            </BarChart>
          </ResponsiveContainer>
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
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Income"
        >
          <DeleteAlert
            content="Are you sure you want to delete this income?"
            onDelete={() => deleteIncome(openDeleteAlert.data)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;