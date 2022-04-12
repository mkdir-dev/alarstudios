import { createTable } from '../Table/Table.js';
import { createForm } from '../Form/Form.js';

export const createSection = () => {
  const table = createTable();
  const form = createForm();

  const section = document.createElement('section');

  section.classList.add('section');

  section.append(table, form);

  return section;
};