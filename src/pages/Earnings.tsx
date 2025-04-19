
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import EarningsTable from '../components/EarningsTable';
import RevenueChart from '../components/RevenueChart';

const Earnings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Earnings Overview</h1>
        <RevenueChart />
        <EarningsTable />
      </div>
    </DashboardLayout>
  );
};

export default Earnings;
