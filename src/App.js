import './App.css';
import React, { useState } from 'react';
import capData from "./capsules_data.json";
import { TableCapsules } from "./components/tables/tableCapsules";
import { DetailsItems } from './components/detailsItems';

import { TextField } from '@mui/material';
import { Button } from '@mui/material';


const App = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [inputUrl, setInputUrl] = useState('');

  const handleUrlChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleUrlSubmit = (event) => {

    event.preventDefault();
    // You can use the inputUrl value for further processing
    console.log('Submitted URL:', inputUrl);
    // Add your logic for processing the URL here
  };

  return (

    <div className="container-lg">
      <header><h1 className='text-center p-5'>What Capsule Should I Buy?</h1></header>
      <p>Ever thought about making an investment in some capsules but were indecisive on which to buy? This project tries to tackle that.<br />
        Scores/UFT updated every monday, buyable/nc mall updated every friday</p>

      <form onSubmit={handleUrlSubmit}>
        <TextField id="outlined-basic" label="Your DTI url" variant="outlined" value={inputUrl} onChange={handleUrlChange} />
        <Button variant="contained" size="small" type="submit" >Submit</Button>
      </form>

      {selectedRowData ? (
        <DetailsItems changeTable={setSelectedRowData} tableData={capData[selectedRowData]?.items} />
      ) : (
        <TableCapsules changeTable={setSelectedRowData} tableData={capData} />
      )}
      <br />
      <footer>
        Images © 1999-2023 Neopets, Inc.
      </footer>
    </div>
  );
};
export default App;
