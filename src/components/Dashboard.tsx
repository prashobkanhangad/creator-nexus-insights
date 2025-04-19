
import React from 'react';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Calendar, 
  Copy, 
  DollarSign, 
  Link
} from 'lucide-react';
import StatCard from './StatCard';
import RevenueChart from './RevenueChart';
import ReferralStats from './ReferralStats';
import MilestoneCard from './MilestoneCard';
import EarningsTable from './EarningsTable';
import ReferralLink from './ReferralLink';
import TierProgress from './TierProgress';
import LeaderboardCard from './LeaderboardCard';
import NotificationPanel from './NotificationPanel';
import ResourcesCard from './ResourcesCard';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Earnings This Month" 
          value="₹12,500" 
          icon={<DollarSign className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Total Referrals" 
          value="24" 
          icon={<Users className="h-4 w-4" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard 
          title="Conversions This Month" 
          value="18" 
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard 
          title="Sessions Booked" 
          value="32" 
          icon={<Calendar className="h-4 w-4" />}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <ReferralStats />
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MilestoneCard 
          title="Starter Milestone" 
          description="Complete 3 referral conversions" 
          current={2} 
          target={3} 
          icon={<Award className="h-4 w-4" />}
        />
        <MilestoneCard 
          title="Pro Milestone" 
          description="Reach ₹500 in referral bookings" 
          current={350} 
          target={500} 
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <MilestoneCard 
          title="Creator Referrals" 
          description="Refer 10 new creators" 
          current={7} 
          target={10} 
          icon={<Users className="h-4 w-4" />}
        />
      </div>

      {/* Referral Link */}
      <ReferralLink />

      {/* Earnings Table */}
      <EarningsTable />

      {/* Additional Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TierProgress />
        <NotificationPanel />
        <div className="space-y-6">
          <LeaderboardCard />
          <ResourcesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
