
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download, Filter } from 'lucide-react';

// Sample earnings data
const earningsData = [
  { 
    id: '1',
    date: '2023-04-10', 
    creatorName: 'Rahul Sharma', 
    type: 'Expert', 
    amount: '₹3,500', 
    status: 'Completed',
    commissionType: 'Standard' 
  },
  { 
    id: '2',
    date: '2023-04-08', 
    creatorName: 'Priya Patel', 
    type: 'User', 
    amount: '₹1,200', 
    status: 'Pending',
    commissionType: 'Standard' 
  },
  { 
    id: '3',
    date: '2023-04-02', 
    creatorName: 'Arjun Singh', 
    type: 'Expert', 
    amount: '₹4,000', 
    status: 'Completed',
    commissionType: 'Bonus' 
  },
  { 
    id: '4',
    date: '2023-03-28', 
    creatorName: 'Neha Gupta', 
    type: 'User', 
    amount: '₹900', 
    status: 'Completed',
    commissionType: 'Standard' 
  },
  { 
    id: '5',
    date: '2023-03-25', 
    creatorName: 'Vikram Joshi', 
    type: 'Expert', 
    amount: '₹5,200', 
    status: 'Completed',
    commissionType: 'Bonus' 
  },
];

const EarningsTable: React.FC = () => {
  const [earnings] = useState(earningsData);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">Earnings Breakdown</CardTitle>
          <CardDescription>Detailed history of your referral earnings</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Creator Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {earnings.map((earning) => (
              <TableRow key={earning.id}>
                <TableCell>{formatDate(earning.date)}</TableCell>
                <TableCell className="font-medium">{earning.creatorName}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={earning.type === 'Expert' ? 'bg-meetxo-100 text-meetxo-700 border-meetxo-200' : 'bg-green-50 text-green-700 border-green-100'}>
                    {earning.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{earning.amount}</TableCell>
                <TableCell>
                  <Badge variant={earning.status === 'Completed' ? 'default' : 'secondary'} className={earning.status === 'Completed' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'}>
                    {earning.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={earning.commissionType === 'Bonus' ? 'bg-blue-50 text-blue-700 border-blue-100' : ''}>
                    {earning.commissionType}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                      <DropdownMenuItem>Contact Support</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EarningsTable;
