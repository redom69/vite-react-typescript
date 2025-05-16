import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { mockApi } from '../../mocks/mockApi';
import { Typology } from '../../types/license';
import toast from 'react-hot-toast';

export const useLicenses = () => {
  return useQuery({
    queryKey: ['licenses'],
    queryFn: mockApi.getLicenses,
  });
};

export const useSummary = () => {
  return useQuery({
    queryKey: ['summary'],
    queryFn: mockApi.getSummaryGoupByTypology,
  });
};

export const useUpdateLicenseTypology = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, typology }: { id: string; typology: Typology }) =>
      mockApi.updateLicenseTypology(id, typology),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['licenses'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
      toast.success('Typology updated successfully!');
    },
    onError: () => {
      toast.error('Error updating typology');
    },
  });
};
