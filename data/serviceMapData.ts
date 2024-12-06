import type { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'API Gateway' }, type: 'input' },
  { id: '2', position: { x: -100, y: 100 }, data: { label: 'Auth Service' } },
  { id: '3', position: { x: 100, y: 100 }, data: { label: 'User Service' } },
  { id: '4', position: { x: 0, y: 200 }, data: { label: 'Payment Service' } },
  { id: '5', position: { x: 0, y: 300 }, data: { label: 'Database' }, type: 'output' },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
];

interface ServiceDetails {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'Operational' | 'Degraded' | 'Down';
  lastUpdated: string;
  version: string;
  maintainer: string;
  dependencies: string[];
  averageResponseTime: string;
  dailyRequests: number;
  errorRate: string;
  alertContext?: string;
  healthScore: number;
}

const serviceDetails: Record<string, ServiceDetails> = {
  '1': {
    id: '1',
    name: 'API Gateway',
    type: 'gateway',
    description: 'Handles all incoming API requests and routes them to appropriate services.',
    status: 'Operational',
    lastUpdated: '2023-06-15 10:30:00',
    version: 'v2.3.1',
    maintainer: 'Network Team',
    dependencies: ['Auth Service', 'User Service', 'Payment Service'],
    averageResponseTime: '120ms',
    dailyRequests: 1500000,
    errorRate: '0.02%',
    healthScore: 98,
  },
  '2': {
    id: '2',
    name: 'Auth Service',
    type: 'service',
    description: 'Manages user authentication and authorization.',
    status: 'Down',
    lastUpdated: '2023-06-15 14:30:00',
    version: 'v1.8.0',
    maintainer: 'Security Team',
    dependencies: ['Database'],
    averageResponseTime: '85ms',
    dailyRequests: 500000,
    errorRate: '0.01%',
    alertContext: 'Critical error in authentication module. Investigation ongoing.',
    healthScore: 65,
  },
  '3': {
    id: '3',
    name: 'User Service',
    type: 'service',
    description: 'Handles user-related operations and data management.',
    status: 'Degraded',
    lastUpdated: '2023-06-15 11:45:00',
    version: 'v2.1.3',
    maintainer: 'User Management Team',
    dependencies: ['Database'],
    averageResponseTime: '150ms',
    dailyRequests: 750000,
    errorRate: '0.05%',
    healthScore: 82,
  },
  '4': {
    id: '4',
    name: 'Payment Service',
    type: 'service',
    description: 'Processes all payment-related transactions.',
    status: 'Operational',
    lastUpdated: '2023-06-15 08:00:00',
    version: 'v3.0.2',
    maintainer: 'Financial Team',
    dependencies: ['Database', 'External Payment Gateway'],
    averageResponseTime: '200ms',
    dailyRequests: 100000,
    errorRate: '0.03%',
    healthScore: 95,
  },
  '5': {
    id: '5',
    name: 'Database',
    type: 'database',
    description: 'Central data storage for all services.',
    status: 'Operational',
    lastUpdated: '2023-06-14 23:00:00',
    version: 'v5.7.1',
    maintainer: 'Database Admin Team',
    dependencies: [],
    averageResponseTime: '30ms',
    dailyRequests: 5000000,
    errorRate: '0.001%',
    healthScore: 99,
  },
};

export const getNodeDetails = (id: string): ServiceDetails | null => {
  return serviceDetails[id] || null;
};

