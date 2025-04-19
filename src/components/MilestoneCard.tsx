
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressBar from './ProgressBar';

interface MilestoneProps {
  title: string;
  description: string;
  current: number;
  target: number;
  icon: React.ReactNode;
}

const MilestoneCard: React.FC<MilestoneProps> = ({
  title,
  description,
  current,
  target,
  icon,
}) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
        <div className="p-2 rounded-md bg-meetxo-100 text-meetxo-700">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <ProgressBar 
          value={current} 
          max={target} 
          showPercentage={true} 
        />
        <p className="text-xs text-muted-foreground mt-2">
          {current < target 
            ? `${target - current} more needed to complete this milestone` 
            : "Milestone completed!"}
        </p>
      </CardContent>
    </Card>
  );
};

export default MilestoneCard;
