import React from 'react';
import { TableItems } from './tables/tableItems';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const DetailsItems = ({ changeTable, tableData }) => {

    const handleClick = () =>{
        changeTable(null);
    }

    return (
        <div className="container-lg">
            <IconButton aria-label="go-back"  color="default" onClick={handleClick}>
                <ArrowBackIcon />
            </IconButton>
            <TableItems tableData={tableData} />
        </div>
    );
};