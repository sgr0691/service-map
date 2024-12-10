/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import type { Alert } from '@/data/alertsData'
import { serviceDetails } from '@/data/serviceMapData'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ServiceDetails } from './ServiceDetails'
import { ChevronDown, ChevronUp, X } from 'lucide-react'

interface AlertItemProps {
  alert: Alert
  onClose: (id: string) => void
}

export function AlertItem({ alert, onClose }: AlertItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const service = serviceDetails[alert.serviceId]

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border rounded-lg p-4 space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Badge variant={
            alert.type === 'error' ? 'destructive' :
            alert.type === 'warning' ? 'warning' : 'default'
          }>
            {alert.type}
          </Badge>
          <h3 className="text-lg font-semibold">{alert.title}</h3>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{alert.description}</p>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Affected Service: {service.name}
          </p>
          <p className="text-sm text-muted-foreground">
            Timestamp: {new Date(alert.timestamp).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">View Service Details</Button>
            </SheetTrigger>
            <SheetContent>
              <ServiceDetails serviceId={alert.serviceId} />
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onClose(alert.id)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <X className="h-4 w-4 mr-2" />
            Close Alert
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

