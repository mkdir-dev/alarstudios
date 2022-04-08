import React from 'react';
import './Table.scss';
import { titlesTable } from '../../utils/constants/constants';

import TableUser from './TableUser/TableUser';

function Table() {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr>
          {titlesTable.map((title) => (
            <th
              key={title.id}
              className="table__thead-th"
            >
              {title.value}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="table__tbody">
        <TableUser />
      </tbody>
    </table>
  );
}

export default Table;
