const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('data/output.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

const licenses = data.map((row, index) => ({
  id: String(row['Licencia ID'] ?? index + 1),
  description: row['Descripción de la Licencia'],
  explanation: row['Explicación'],
  typology: String(row['Categoría']).toLowerCase().trim(),
}));

fs.writeFileSync(
  'data/licenses.json',
  JSON.stringify(licenses, null, 2),
  'utf8'
);
console.log('✅ JSON creado en data/licenses.json');
