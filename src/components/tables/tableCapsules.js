
import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

export const TableCapsules = ({ changeTable, tableData }) => {

  const columns = useMemo(
    () => [
      {
        field: 'img',
        header: 'Image',
        size: 20,
        Cell: ({ cell }) =>
          <img
            src={
              cell.row.original.img}
            alt={`${cell.row.original.name}`}
            style={{ width: '80%', height: 'auto' }}
          />
      },
      {
        accessorKey: 'name',
        header: 'Capsule Name',
        size: 40
      },
      {
        accessorKey: 'score_items',
        header: 'Score Items',
        size: 10,
      },
      {
        accessorKey: 'number_items',
        header: 'Number of Items',
        size: 10,
      }
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData}
      enableDensityToggle={false}
      enableBottomToolbar={false}
      enableFullScreenToggle={false}
      muiTableBodyRowProps={({ row }) => ({
        onClick: (event) => {
          changeTable(row.id)
        },
        sx: {
          cursor: 'pointer',
        },
      })}
      initialState={{
        density: 'compact',
        sorting: [{
          id: 'score_items',
          desc: false
        }]
      }}
    />

  )

};
