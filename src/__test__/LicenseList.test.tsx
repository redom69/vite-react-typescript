import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LicenseList from '../pages/LicenseList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';

const mockMutate = jest.fn();

jest.mock('../services/license/service', () => ({
  useLicenses: () => ({
    isLoading: false,
    data: [
      {
        id: '1',
        description: 'Adobe Creative Cloud',
        explanation: 'Suite de diseño',
        typology: 'diseño',
      },
    ],
  }),
  useUpdateLicenseTypology: () => ({
    mutate: mockMutate,
  }),
}));

jest.mock('primereact/dropdown', () => ({
  Dropdown: ({ value, options, onChange }: any) => (
    <select
      data-testid="typology-select"
      value={value}
      onChange={(e) => onChange({ value: e.target.value })}
    >
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  ),
}));

describe('LicenseList', () => {
  it('muestra datos y permite editar la tipología', async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <LicenseList />
      </QueryClientProvider>
    );

    expect(screen.getByText('Adobe Creative Cloud')).toBeInTheDocument();
    expect(screen.getByText('Suite de diseño')).toBeInTheDocument();
    expect(screen.getByText('diseño')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /edit/i }));

    await waitFor(() =>
      expect(screen.getByText('Edit Typology')).toBeInTheDocument()
    );

    const dropdown = screen.getByRole('combobox');
    await userEvent.selectOptions(dropdown, 'marketing');

    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        id: '1',
        typology: 'marketing',
      });
    });
  });
});
