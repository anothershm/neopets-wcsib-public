import './App.css';
import React, { useState } from 'react';
import capData from "./capsules_data.json";
import { TableCapsules } from "./components/tables/tableCapsules";
import { DetailsItems } from './components/detailsItems';


const App = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);

  return (

    <div className="container-lg">
      <header><h1 className='text-center p-5'>What Capsule Should I Buy?</h1></header>
      <p>Ever thought about making an investment in some capsules but were indecisive on which to buy? This project tries to tackle that.<br/>
        Scores/UFT updated every monday, buyable/nc mall updated every friday</p>
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
