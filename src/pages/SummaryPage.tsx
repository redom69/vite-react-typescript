import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';

import { useSummary } from '../services/license/service';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function SummaryPage() {
  const { data: summary, isLoading } = useSummary();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <ProgressSpinner />
      </div>
    );
  }
  if (!summary) return <p>No data</p>;

  const summaryData = Object.entries(summary).map(([typology, count]) => ({
    typology,
    count,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Typology Summary</h2>
      <DataTable value={summaryData} rows={10} stripedRows showGridlines>
        <Column
          field="typology"
          header="Typology"
          sortable
          style={{ width: '70%' }}
        />
        <Column
          field="count"
          header="Count"
          sortable
          style={{ width: '30%' }}
        />
      </DataTable>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Typology Visualization </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={summaryData}>
            <XAxis dataKey="typology" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
