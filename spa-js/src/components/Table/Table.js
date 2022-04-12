import { createContact } from '../AddContact/AddContact.js';
import { getContacts } from '../../utils/api.js';

export const createTable = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const trThead = document.createElement('tr');
  const thName = document.createElement('th');
  const thPhone = document.createElement('th');
  const thAction = document.createElement('th');
  const thDelete = document.createElement('th');

  table.classList.add('table');
  thead.classList.add('table__thead');
  thName.classList.add('table__thead-th');
  thPhone.classList.add('table__thead-th');
  thAction.classList.add('table__thead-th');

  tbody.classList.add('table__tbody');

  thName.textContent = 'Name';
  thPhone.textContent = 'Phone';
  thAction.textContent = 'Action';
  thDelete.textContent = 'Delete';
  tbody.id = 'tbody';

  table.append(thead, tbody);
  thead.append(trThead);
  trThead.append(thName, thPhone, thAction, thDelete);

  getContacts()
    .then((res) => {
      res.map((values) => createContact(values));
    })
    .catch((err) => console.log(err));

  return table;
};