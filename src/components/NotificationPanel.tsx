
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle2, Award, TrendingUp, Info } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'achievement' | 'milestone' | 'alert' | 'info';
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Milestone Achieved!',
    message: "Congratulations! You've reached 10 referrals this month.",
    time: '2 hours ago',
    type: 'achievement',
    read: false
  },
  {
    id: '2',
    title: 'Earnings Update',
    message: 'Your referral commission of ₹3,500 has been processed.',
    time: '1 day ago',
    type: 'alert',
    read: false
  },
  {
    id: '3',
    title: 'Nearly There!',
    message: "You're just 2 conversions away from reaching Pro tier.",
    time: '2 days ago',
    type: 'milestone',
    read: true
  },
  {
    id: '4',
    title: 'Creator Program Update',
    message: 'New bonus milestones have been added to the program.',
    time: '3 days ago',
    type: 'info',
    read: true
  },
  {
    id: '5',
    title: 'Referral Converted',
    message: 'Arjun Singh has joined as an expert through your referral.',
    time: '5 days ago',
    type: 'alert',
    read: true
  }
];

const NotificationPanel: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'achievement':
        return <Award className="h-5 w-5 text-green-500" />;
      case 'milestone':
        return <TrendingUp className="h-5 w-5 text-meetxo-600" />;
      case 'alert':
        return <CheckCircle2 className="h-5 w-5 text-blue-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">Notifications</CardTitle>
            <CardDescription>Stay updated with your performance</CardDescription>
          </div>
          <div className="relative">
            <Bell className="h-5 w-5 text-meetxo-700" />
            <span className="absolute -top-1 -right-1 bg-meetxo-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {notifications.filter(n => !n.read).length}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-0">
            {notifications.map((notification, index) => (
              <React.Fragment key={notification.id}>
                <div className={`py-3 flex gap-3 ${!notification.read ? 'bg-meetxo-50' : ''}`}>
                  <div className="flex-shrink-0 mt-0.5">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{notification.message}</p>
                    <span className="text-xs text-gray-400 mt-1 block">{notification.time}</span>
                  </div>
                </div>
                {index < notifications.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;
