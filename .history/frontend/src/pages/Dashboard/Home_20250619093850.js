import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';

const Home = () => {
  useUserAuth();

  cons


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
