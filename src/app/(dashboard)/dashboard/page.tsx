import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 m-0 md:p-8">
        <div className="flex items-center justify-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome to the E-Dialysis Center
          </h2>
        </div>
      </div>
      <div className="bg-slate-900 flex flex-col items-center justify-center">
        
      
      </div>
    </ScrollArea>
  );
}
