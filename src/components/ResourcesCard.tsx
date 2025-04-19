
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink, Play, Image } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: 'document' | 'video' | 'asset';
  link: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Creator Playbook',
    description: 'Complete guide to optimizing your referral performance',
    icon: 'document',
    link: '#'
  },
  {
    id: '2',
    title: 'Marketing Toolkit',
    description: 'Banners, templates and social media assets',
    icon: 'asset',
    link: '#'
  },
  {
    id: '3',
    title: 'Referral Strategy Webinar',
    description: '45-minute session on effective referral techniques',
    icon: 'video',
    link: '#'
  }
];

const ResourcesCard: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'document':
        return <FileText className="h-10 w-10 text-meetxo-500 p-2 bg-meetxo-100 rounded-md" />;
      case 'video':
        return <Play className="h-10 w-10 text-meetxo-500 p-2 bg-meetxo-100 rounded-md" />;
      case 'asset':
        return <Image className="h-10 w-10 text-meetxo-500 p-2 bg-meetxo-100 rounded-md" />;
      default:
        return <FileText className="h-10 w-10 text-meetxo-500 p-2 bg-meetxo-100 rounded-md" />;
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium">Content Hub & Resources</CardTitle>
        <CardDescription>Tools to help you boost your referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-0">
          {resources.map((resource, index) => (
            <React.Fragment key={resource.id}>
              <div className="py-3 flex gap-4 items-start">
                <div className="flex-shrink-0">
                  {getIcon(resource.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{resource.description}</p>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
              {index < resources.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesCard;
