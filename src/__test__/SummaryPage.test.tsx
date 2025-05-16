import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryPage from '../pages/SummaryPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('../services/license/service', () => ({
  useSummary: jest.fn(),
}));

const mockUseSummary = require('../services/license/service').useSummary;

const renderWithClient = (component: React.ReactNode) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};

describe('SummaryPage', () => {
  it('muestra los datos correctamente', () => {
    mockUseSummary.mockReturnValue({
      isLoading: false,
      data: {
        productividad: 3,
        diseño: 2,
        comunicación: 1,
      },
    });

    renderWithClient(<SummaryPage />);

    expect(screen.getByText('Resumen de Tipologías')).toBeInTheDocument();
    expect(screen.getByText('productividad')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('diseño')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('muestra el spinner cuando está cargando', () => {
    mockUseSummary.mockReturnValue({
      isLoading: true,
      data: null,
    });

    renderWithClient(<SummaryPage />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('muestra mensaje cuando no hay datos', () => {
    mockUseSummary.mockReturnValue({
      isLoading: false,
      data: null,
    });

    renderWithClient(<SummaryPage />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });
});
