import React, { useEffect, useState, useCallback } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/Cards/InfoCard';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { IoMdCard } from 'react-icons/io';
import { addThousandsSeparator } from '../../utils/helper';
import './Home.css';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import FinanceOverview from '../../components/Dashboard/FinanceOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';
import Last30DaysExpense from '../../components/Dashboard/Last30DaysExpense';
import RecentIncomeWithChart from '../../components/Dashboard/RecentIncomeWithChart';
import RecentIncome from '../../components/Dashboard/RecentIncome';
import { defaultDashboardData } from '../../utils/defaultDashboardData';

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(defaultDashboardData);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      setDashboardData(response.data || defaultDashboardData);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      setDashboardData(defaultDashboardData);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="home-container">
      <DashboardLayout activeMenu="Dashboard">
        <div className="dashboard-content">
          <div className="dashboard-cards">
            <InfoCard
              icon={<IoMdCard className="card-icon bg-blue" />}
              label="Total Balance"
              value={addThousandsSeparator(dashboardData.totalBalance)}
            />
            <InfoCard
              icon={<LuWalletMinimal className="card-icon bg-green" />}
              label="Total Income"
              value={addThousandsSeparator(dashboardData.totalIncome)}
            />
            <InfoCard
              icon={<LuHandCoins className="card-icon bg-orange" />}
              label="Total Expense"
              value={addThousandsSeparator(dashboardData.totalExpense)}
            />
          </div>

          <div className="dashboard-sections">

            <div className="dashboard-section-row">
             <div className="recent-box">
            <RecentTransactions
              transactions={dashboardData.recentTransactions}
              onSeeMore={() => navigate("/expense")}
            />
            </div>
            <div className="overview-box">
            <FinanceOverview
              totalBalance={dashboardData.totalBalance}
              totalIncome={dashboardData.totalIncome}
              totalExpense={dashboardData.totalExpense}
            />
            </div>
            </div>

            <div className="dashboard-section-row">
              <div className="expense-box">
            <ExpenseTransactions
              transactions={dashboardData.last30DaysExpense?.transactions || []}
              onSeeMore={() => navigate("/expense")}
            />
            </div>

            <div className="last30-box">
            <Last30DaysExpense
              data={dashboardData.last30DaysExpense?.transactions || []}
            />
            </div>
            </div>

            <div className="dashboard-section-row">
              <div className="income-chart-box">
            <RecentIncomeWithChart
              data={dashboardData.last60DaysIncome?.transactions?.slice(0, 4) || []}
              totalIncome={dashboardData.totalIncome}
            />
            </div>

            <div className="income-box">
            <RecentIncome
              transactions={dashboardData.last60DaysIncome?.transactions || []}
              onSeeMore={() => navigate("/income")}
            />
            </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Home;