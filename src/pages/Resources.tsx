
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ResourcesCard from '../components/ResourcesCard';

const Resources = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Content Hub & Resources</h1>
        <ResourcesCard />
      </div>
    </DashboardLayout>
  );
};

export default Resources;
