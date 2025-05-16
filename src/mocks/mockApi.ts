import { License, Typology } from '../types/license';
import rawLicenses from '../../data/licenses.json';

let licenses: License[] = rawLicenses as License[];

export const mockApi = {
  getLicenses: (): Promise<License[]> => {
    return new Promise<License[]>((resolve) => {
      setTimeout(() => {
        resolve(licenses);
      }, 1000);
    });
  },

  getSummaryGoupByTypology: (): Promise<Record<Typology, number>> => {
    return new Promise<Record<Typology, number>>((resolve) => {
      setTimeout(() => {
        const summary = licenses.reduce(
          (acc, license) => {
            acc[license.typology] = (acc[license.typology] || 0) + 1;
            return acc;
          },
          {} as Record<Typology, number>
        );
        resolve(summary);
      }, 1000);
    });
  },

  updateLicenseTypology: (
    id: string,
    newTypology: Typology
  ): Promise<License[]> => {
    return new Promise<License[]>((resolve) => {
      setTimeout(() => {
        licenses = licenses.map((license) =>
          license.id === id ? { ...license, typology: newTypology } : license
        );
        resolve(licenses);
      }, 1000);
    });
  },
};
