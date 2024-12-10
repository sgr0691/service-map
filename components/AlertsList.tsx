/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { AlertItem } from './AlertItem'
import { alertsData, Alert } from '../data/alertsData'
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function AlertsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState<string[]>([])

  const filteredAlerts = alertsData.filter(alert => 
    alert.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (typeFilter.length === 0 || typeFilter.includes(alert.type))
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Input
          placeholder="Search alerts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter by Type</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {['error', 'warning', 'info'].map((type) => (
              <DropdownMenuCheckboxItem
                key={type}
                checked={typeFilter.includes(type)}
                onCheckedChange={(checked) => 
                  setTypeFilter(checked 
                    ? [...typeFilter, type]
                    : typeFilter.filter((t) => t !== type)
                  )
                }
              >
                {type}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  )
}

