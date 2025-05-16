import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { ProgressSpinner } from 'primereact/progressspinner';

import { Typology } from '../types/license';
import {
  useLicenses,
  useUpdateLicenseTypology,
} from '../services/license/service';

const typologies: Typology[] = [
  'productividad',
  'diseño',
  'comunicación',
  'desarrollo',
  'finanzas',
  'marketing',
];

export default function LicenseList() {
  const { data: licenses, isLoading } = useLicenses();
  const { mutate: updateLicenseTypology } = useUpdateLicenseTypology();

  const [visible, setVisible] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<{
    id: string;
    typology: Typology;
  } | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<{
    typology: Typology;
  }>();

  const onEdit = (licenseId: string, typology: Typology) => {
    setSelectedLicense({ id: licenseId, typology });
    setValue('typology', typology);
    setVisible(true);
  };

  const onSubmit = (data: { typology: Typology }) => {
    if (selectedLicense) {
      updateLicenseTypology({
        id: selectedLicense.id,
        typology: data.typology,
      });
      setVisible(false);
    }
  };

  const actionTemplate = (rowData: any) => (
    <Button
      icon="pi pi-pencil"
      label="Edit"
      aria-label="Edit"
      className="p-button-sm p-button-outlined"
      onClick={() => onEdit(rowData.id, rowData.typology)}
    />
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">License Management</h2>

      <DataTable value={licenses} paginator rows={10} stripedRows showGridlines>
        <Column
          field="description"
          header="Description"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="typology"
          header="Typology"
          sortable
          style={{ width: '15%' }}
        />
        <Column
          field="explanation"
          header="Explanation"
          style={{ width: '45%' }}
        />
        <Column
          body={actionTemplate}
          header="Actions"
          style={{ width: '10%' }}
        />
      </DataTable>

      <Dialog
        header="Edit Typology"
        visible={visible}
        onHide={() => setVisible(false)}
        modal
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Dropdown
            value={selectedLicense?.typology}
            options={typologies}
            {...register('typology')}
            onChange={(e) => setValue('typology', e.value)}
            placeholder="Select Typology"
            className="w-full "
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button
              label="Cancel"
              className="p-button-secondary"
              onClick={() => setVisible(false)}
            />
            <Button type="submit" label="Save" className="p-button-primary" />
          </div>
        </form>
      </Dialog>
    </div>
  );
}
