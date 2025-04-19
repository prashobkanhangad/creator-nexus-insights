
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Share2, Mail, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ReferralLink: React.FC = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const referralLink = "https://meetxo.com/invite/creator123";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    
    toast({
      title: "Link copied!",
      description: "Referral link copied to clipboard",
      duration: 3000,
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const shareViaEmail = () => {
    const subject = "Join me on MeetXO Creator Program";
    const body = `Hey there!\n\nI've been earning through the MeetXO Creator Program and thought you might be interested. Join through my referral link:\n\n${referralLink}\n\nLooking forward to seeing you there!`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium">Your Referral Link</CardTitle>
        <CardDescription>Share this link to invite creators and experts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            value={referralLink}
            readOnly
            className="flex-1 bg-secondary/50"
          />
          <Button
            variant="default"
            className="flex items-center gap-1"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="flex-1 flex items-center justify-center gap-2"
            onClick={shareViaEmail}
          >
            <Mail className="h-4 w-4" />
            Share via Email
          </Button>
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Social Media
          </Button>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            Tip: Personalize your invite message to increase your conversion rate!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralLink;
