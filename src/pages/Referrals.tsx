
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ReferralStats from '../components/ReferralStats';
import ReferralLink from '../components/ReferralLink';

const Referrals = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Referral Performance</h1>
        <ReferralLink />
        <ReferralStats />
      </div>
    </DashboardLayout>
  );
};

export default Referrals;
