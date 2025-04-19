
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';

const data = [
  { name: 'Jan', user: 4000, expert: 2400, bonus: 1200 },
  { name: 'Feb', user: 3000, expert: 1800, bonus: 1400 },
  { name: 'Mar', user: 2000, expert: 2800, bonus: 1000 },
  { name: 'Apr', user: 2780, expert: 3908, bonus: 2000 },
  { name: 'May', user: 1890, expert: 4800, bonus: 2181 },
  { name: 'Jun', user: 2390, expert: 3800, bonus: 2500 },
  { name: 'Jul', user: 3490, expert: 4300, bonus: 2100 },
];

const RevenueChart: React.FC = () => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium">Revenue Breakdown</CardTitle>
        <CardDescription>Earnings by referral type and bonuses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUser" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9B87F5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#9B87F5" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorExpert" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6E59A5" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorBonus" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B794F4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#B794F4" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="user" 
                name="User Referrals"
                stackId="1"
                stroke="#9B87F5" 
                fillOpacity={1} 
                fill="url(#colorUser)" 
              />
              <Area 
                type="monotone" 
                dataKey="expert" 
                name="Expert Referrals"
                stackId="1"
                stroke="#6E59A5" 
                fillOpacity={1} 
                fill="url(#colorExpert)" 
              />
              <Area 
                type="monotone" 
                dataKey="bonus" 
                name="Bonus Revenue"
                stackId="1"
                stroke="#B794F4" 
                fillOpacity={1} 
                fill="url(#colorBonus)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
