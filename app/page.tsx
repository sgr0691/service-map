'use client';

import { ServiceMap } from "@/components/ServiceMap";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getNodeDetails } from "@/data/serviceMapData";
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HealthScore } from "@/components/HealthScore";
import { useState } from "react";
import Navigation from "@/components/navigation";

export default function Home() {
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
  
    const handleNodeClick = (id: string) => {
      setSelectedNode(id);
      setIsSheetOpen(true);
    };
  
    const nodeDetails = selectedNode ? getNodeDetails(selectedNode) : null;  
    
    return (
    <div className="min-h-screen flex flex-col items-center">
      <Navigation />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Service Overview</h1>
        <ServiceMap onNodeClick={handleNodeClick} />
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent className="sm:max-w-[540px]">
            {nodeDetails && (
              <>
                <SheetHeader>
                  <SheetTitle className="text-2xl">{nodeDetails.name}</SheetTitle>
                  <SheetDescription>{nodeDetails.type}</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Service Health Score</h3>
                    <HealthScore score={nodeDetails.healthScore} />
                  </div>
                  {nodeDetails.status === 'Down' && nodeDetails.alertContext && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{nodeDetails.alertContext}</AlertDescription>
                    </Alert>
                  )}
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-sm text-muted-foreground">{nodeDetails.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant={nodeDetails.status === 'Operational' ? 'default' : nodeDetails.status === 'Degraded' ? 'destructive' : 'destructive'}>
                      {nodeDetails.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Last updated: {nodeDetails.lastUpdated}</span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Version</h4>
                      <p className="text-sm">{nodeDetails.version}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Maintainer</h4>
                      <p className="text-sm">{nodeDetails.maintainer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Avg. Response Time</h4>
                      <p className="text-sm">{nodeDetails.averageResponseTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Daily Requests</h4>
                      <p className="text-sm">{nodeDetails.dailyRequests.toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Error Rate</h4>
                      <p className="text-sm">{nodeDetails.errorRate}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dependencies</h4>
                    <ul className="list-disc list-inside text-sm">
                      {nodeDetails.dependencies.map((dep, index) => (
                        <li key={index}>{dep}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}
