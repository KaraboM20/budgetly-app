import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/Cards/InfoCard';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { IoMdCard} from 'react-icons/io';
import { addThousandsSeparator } from '../../utils/helper';
import './Home.css';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import FinanceOverview from '../../components/Dashboard/FinanceOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';
import Last30DaysExpense from '../../components/Dashboard/Last30DaysExpense';

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
      `${API_PATHS.DASHBOARD.GET_DATA}`
      );

      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log ("Something went wrong. Please try again.", error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {

    }
  }, [])


  return (
    <div>
      <DashboardLayout activeMenu="Dashboard">
        <div>
          <div className="dashboard-cards">
            <InfoCard
            icon={<IoMdCard className="card-icon bg-blue" />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            />

            <InfoCard
            icon={<LuWalletMinimal className="card-icon bg-green" />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            />

            <InfoCard
            icon={<LuHandCoins className="card-icon bg-orange" />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            />

          </div>

          <div>
            <RecentTransactions 
            transactions={dashboardData?.recentTransactions}
            onSeeMore= {() => navigate("/expense")}
            />

            <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpense || 0}
            />

            <ExpenseTransactions 
             transactions={dashboardData?.last30DaysExpense?.transactions || {}}
             onSeeMore={() => navigate("/expense")} 
             />

             <Last30DaysExpense 
             data={dashboardData?.last30DaysExpense?.transactions || {}}
             />

             <RecentIncomeWithChart

          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Home
