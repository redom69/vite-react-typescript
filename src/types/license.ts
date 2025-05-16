export type Typology =
  | 'productividad'
  | 'diseño'
  | 'comunicación'
  | 'desarrollo'
  | 'finanzas'
  | 'marketing';

export interface License {
  id: string;
  description: string;
  explanation: string;
  typology: Typology;
}
