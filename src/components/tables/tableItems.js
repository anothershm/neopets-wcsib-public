
import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

export const TableItems = ({ tableData, userWants }) => {

    const columns = useMemo(
        () => [
            {
                field: 'img',
                header: 'Image',
                size: 20,
                Cell: ({ cell }) =>
                    <div style={{ width: '100px' }}> {/* Adjust the width as needed */}
                        <img
                            src={cell.row.original.img}
                            alt={cell.row.original.name}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
            },
            {
                accessorKey: 'name',
                header: 'Wearable Name',
                size: 130
            },
            {
                accessorKey: 'score',
                header: 'Score',
                size: 130,
            },
            {
                accessorKey: 'seeking',
                header: 'Seeking',
                size: 130,
            },
            {
                accessorKey: 'offering',
                header: 'UFT',
                size: 130,
            },
            {
                accessorKey: 'buyable',
                header: 'Buyable',
                size: 130,
            },
            {
                accessorKey: 'owls',
                header: 'Owls value',
                size: 130,
            },
            {
                header: 'Wanted',
                Cell: ({ cell }) => (
                    userWants && userWants.includes(cell.row.original.name)
                        ? "yes"
                        : ""
                ),
                sortable: true,
                size: 130,
            }
        ],
        [userWants],
    );

    return (
        <MaterialReactTable
            columns={tableData.length !== 0 ? columns : []}
            data={tableData}
            enableToolbarInternalActions={tableData.length !== 0}
            enableDensityToggle={false}
            enableBottomToolbar={tableData.length !== 0 && tableData.length > 10}
            enableFullScreenToggle={false}   
            initialState={{
                density: 'compact',
                sorting: [{
                    id: 'score',
                    desc: false
                }]
            }}
        />
    )
}