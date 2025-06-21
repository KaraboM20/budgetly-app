import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [lo]


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
