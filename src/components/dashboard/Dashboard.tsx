import React from 'react';
import MetricCard from './MetricCard';
import DisbursementsTable from './DisbursementsTable';
import { dashboardMetrics, recentDisbursements } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.title} metric={metric} />
        ))}
      </div>

      {/* Disbursements Table */}
      <DisbursementsTable disbursements={recentDisbursements} />
    </div>
  );
} 