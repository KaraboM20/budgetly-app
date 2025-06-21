import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import userAuth

const Home = () => {
  useUserAuth();
  return (
    <div>
      <DashboardLayout activeMenu="Dashboard">
        <div>
          
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Home
