import Navigation from "@/components/navigation";
import { ServicesTable } from '@/components/ServicesTable';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Services Overview</h1>
        <ServicesTable />
      </main>
    </div>
  );
}

