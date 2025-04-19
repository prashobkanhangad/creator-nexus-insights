
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Medal } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  name: string;
  avatar?: string;
  earnings: string;
  referrals: number;
  position: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: '1', name: 'Rahul Sharma', earnings: '₹12,500', referrals: 24, position: 1 },
  { id: '2', name: 'Priya Patel', earnings: '₹10,200', referrals: 18, position: 2 },
  { id: '3', name: 'Vikram Joshi', earnings: '₹9,850', referrals: 16, position: 3 },
  { id: '4', name: 'Neha Gupta', earnings: '₹8,700', referrals: 15, position: 4 },
  { id: '5', name: 'Arjun Singh', earnings: '₹7,300', referrals: 12, position: 5 },
];

const LeaderboardCard: React.FC = () => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium">Top Creators This Month</CardTitle>
        <CardDescription>See who's leading the referral program</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((entry) => (
            <div key={entry.id} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-8 text-center font-semibold text-sm">
                {entry.position <= 3 ? (
                  <Medal className={`h-6 w-6 mx-auto ${
                    entry.position === 1 
                      ? 'text-yellow-500' 
                      : entry.position === 2 
                        ? 'text-gray-400' 
                        : 'text-amber-700'
                  }`} />
                ) : (
                  <span className="text-muted-foreground">{entry.position}</span>
                )}
              </div>
              
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src={entry.avatar} alt={entry.name} />
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {entry.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{entry.name}</p>
                <p className="text-xs text-muted-foreground">{entry.referrals} referrals</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-semibold">{entry.earnings}</p>
                <p className="text-xs text-muted-foreground">earnings</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
