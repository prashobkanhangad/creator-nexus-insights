
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface UserProfileProps {
  name: string;
  tier: string;
  avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, tier, avatarUrl }) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-10 w-10 border-2 border-meetxo-200">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-meetxo-100 text-meetxo-700">
          {name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium text-sm">{name}</div>
        <Badge variant="outline" className="bg-meetxo-100 text-meetxo-700 text-xs font-medium">
          {tier} Tier
        </Badge>
      </div>
    </div>
  );
};

export default UserProfile;
