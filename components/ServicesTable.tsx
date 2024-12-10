/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { HealthScore } from './HealthScore'
import { serviceDetails } from '../data/serviceMapData'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet"
import { ServiceDetails } from './ServiceDetails'

export function ServicesTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const filteredServices = Object.values(serviceDetails).filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter.length === 0 || statusFilter.includes(service.status))
  )

  return (
    <div className="space-y-4 bg-white rounded-md p-4">
      <div className="flex justify-between">
        <Input
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter by Status</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {['Operational', 'Degraded', 'Down'].map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={statusFilter.includes(status)}
                onCheckedChange={(checked) => 
                  setStatusFilter(checked 
                    ? [...statusFilter, status]
                    : statusFilter.filter((s) => s !== status)
                  )
                }
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Health Score</TableHead>
            <TableHead>Avg. Response Time</TableHead>
            <TableHead>Error Rate</TableHead>
            <TableHead>Daily Requests</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredServices.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-medium"
                      onClick={() => setSelectedService(service.id)}
                    >
                      {service.name}
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <ServiceDetails serviceId={service.id} />
                  </SheetContent>
                </Sheet>
              </TableCell>
              <TableCell>
                <Badge variant={
                  service.status === 'Operational' ? 'default' :
                  service.status === 'Degraded' ? 'secondary' : 'destructive'
                }>
                  {service.status}
                </Badge>
              </TableCell>
              <TableCell>
                <HealthScore score={service.healthScore} />
              </TableCell>
              <TableCell>{service.averageResponseTime}</TableCell>
              <TableCell>{service.errorRate}</TableCell>
              <TableCell>{service.dailyRequests.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

