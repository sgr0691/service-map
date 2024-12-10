import Navigation from '@/components/navigation'
import { AlertsList } from '@/components/AlertsList'

export default function AlertsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Alerts</h1>
        <AlertsList />
      </main>
    </div>
  )
}

