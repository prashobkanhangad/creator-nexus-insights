
import React from 'react';
import { Trophy } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import MilestoneCard from '../components/MilestoneCard';
import TierProgress from '../components/TierProgress';
import LeaderboardCard from '../components/LeaderboardCard';

const Milestones = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Milestones & Achievements</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <MilestoneCard 
            title="Referral Milestone"
            description="Track your progress towards the next referral milestone"
            current={8}
            target={10}
            icon={<Trophy className="h-5 w-5" />}
          />
          <TierProgress />
        </div>
        <LeaderboardCard />
      </div>
    </DashboardLayout>
  );
};

export default Milestones;
