import React from 'react';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { TabMenu } from 'primereact/tabmenu';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Licenses',
      icon: 'pi pi-list',
      command: () => navigate({ to: '/' }),
    },
    {
      label: 'Summary',
      icon: 'pi pi-chart-bar',
      command: () => navigate({ to: '/summary' }),
    },
  ];

  return (
    <div className="p-4">
      <Toaster position="top-right" />
      <TabMenu model={items} />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
