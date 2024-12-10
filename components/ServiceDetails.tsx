import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { HealthScore } from './HealthScore'
import { serviceDetails } from '../data/serviceMapData'

interface ServiceDetailsProps {
  serviceId: string
}

export function ServiceDetails({ serviceId }: ServiceDetailsProps) {
  const service = serviceDetails[serviceId]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="space-y-6">
      <SheetHeader>
        <SheetTitle>{service.name}</SheetTitle>
        <SheetDescription>{service.type}</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Status</h3>
          <Badge variant={
            service.status === 'Operational' ? 'default' :
            service.status === 'Degraded' ? 'secondary' : 'destructive'
          }>
            {service.status}
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Health Score</h3>
          <HealthScore score={service.healthScore} />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Description</h3>
          <p className="text-sm text-muted-foreground">{service.description}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Version</h3>
          <p className="text-sm">{service.version}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Maintainer</h3>
          <p className="text-sm">{service.maintainer}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Average Response Time</h3>
          <p className="text-sm">{service.averageResponseTime}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Daily Requests</h3>
          <p className="text-sm">{service.dailyRequests.toLocaleString()}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Error Rate</h3>
          <p className="text-sm">{service.errorRate}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Dependencies</h3>
          <ul className="text-sm list-disc list-inside">
            {service.dependencies.map((dep, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index}>{dep}</li>
            ))}
          </ul>
        </div>
        {service.alertContext && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Alert Context</h3>
            <p className="text-sm text-destructive">{service.alertContext}</p>
          </div>
        )}
      </div>
    </div>
  )
}

