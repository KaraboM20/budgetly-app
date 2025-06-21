import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get
      `${API_PATHS.DASHBOARD.GET_DATA}`
    }
  }
  return (
    <div>
      <DashboardLayout activeMenu="Dashboard">
        <div>
          HOME
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Home
