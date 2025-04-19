
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LabelList 
} from 'recharts';

const data = [
  { name: 'Users', value: 65, fill: '#9B87F5' },
  { name: 'Experts', value: 42, fill: '#6E59A5' },
  { name: 'Conversion', value: 78, fill: '#B794F4' },
  { name: 'Earnings', value: 56, fill: '#D6BCFA' },
];

const ReferralStats: React.FC = () => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium">Referral Statistics</CardTitle>
        <CardDescription>Performance metrics for your referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              barSize={60}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                formatter={(value) => [`${value}`, '']}
              />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
              >
                <LabelList dataKey="value" position="top" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralStats;
