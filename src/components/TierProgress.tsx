
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgressBar from './ProgressBar';

const tierData = {
  starter: {
    conversions: { current: 2, required: 3 },
    earnings: { current: 150, required: 200 },
    benefits: [
      'Base commission rate: 5%',
      'Access to referral assets',
      'Weekly performance analytics'
    ]
  },
  pro: {
    conversions: { current: 6, required: 10 },
    earnings: { current: 350, required: 500 },
    benefits: [
      'Increased commission rate: 7.5%',
      'Early access to new features',
      'Dedicated support channel',
      'Monthly performance review'
    ]
  },
  elite: {
    conversions: { current: 15, required: 25 },
    earnings: { current: 880, required: 1500 },
    benefits: [
      'Premium commission rate: 10%',
      'Special bonus milestones',
      'Featured creator spotlights',
      'Priority support access',
      'Exclusive invites to creator events'
    ]
  }
};

const TierProgress: React.FC = () => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium">Performance Tiers</CardTitle>
        <CardDescription>Your progress towards tier upgrades</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="starter">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="starter">Starter</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
            <TabsTrigger value="elite">Elite</TabsTrigger>
          </TabsList>
          {Object.entries(tierData).map(([tier, data]) => (
            <TabsContent key={tier} value={tier}>
              <div className="space-y-4 pt-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Conversions</span>
                    <span className="text-sm text-muted-foreground">
                      {data.conversions.current} / {data.conversions.required}
                    </span>
                  </div>
                  <ProgressBar 
                    value={data.conversions.current} 
                    max={data.conversions.required} 
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Earnings (₹'000)</span>
                    <span className="text-sm text-muted-foreground">
                      {data.earnings.current} / {data.earnings.required}
                    </span>
                  </div>
                  <ProgressBar 
                    value={data.earnings.current} 
                    max={data.earnings.required} 
                  />
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-2">Tier Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {data.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-meetxo-500 text-lg leading-tight">•</span> 
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TierProgress;
