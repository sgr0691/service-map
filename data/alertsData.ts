/* eslint-disable @typescript-eslint/no-unused-vars */
import { serviceDetails } from '@/data/serviceMapData'

export interface Alert {
  id: string
  serviceId: string
  type: 'error' | 'warning' | 'info'
  title: string
  description: string
  timestamp: string
}

export const alertsData: Alert[] = [
  {
    id: '1',
    serviceId: '2',
    type: 'error',
    title: 'Authentication Service Down',
    description: 'The authentication service is currently unavailable, causing login issues for users.',
    timestamp: '2023-06-15T14:30:00Z'
  },
  {
    id: '2',
    serviceId: '3',
    type: 'warning',
    title: 'High Latency in User Service',
    description: 'The User Service is experiencing higher than normal latency, which may impact user experience.',
    timestamp: '2023-06-15T12:45:00Z'
  },
  {
    id: '3',
    serviceId: '4',
    type: 'info',
    title: 'Payment Service Maintenance',
    description: 'Scheduled maintenance for the Payment Service will occur tonight at 2 AM UTC.',
    timestamp: '2023-06-15T10:00:00Z'
  },
  {
    id: '4',
    serviceId: '1',
    type: 'warning',
    title: 'Increased Error Rate in API Gateway',
    description: 'The API Gateway is showing an increased error rate. The team is investigating the cause.',
    timestamp: '2023-06-15T13:15:00Z'
  },
  {
    id: '5',
    serviceId: '5',
    type: 'info',
    title: 'Database Optimization Complete',
    description: 'The scheduled database optimization has been completed successfully.',
    timestamp: '2023-06-14T23:30:00Z'
  }
]

