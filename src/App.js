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
      {selectedRowData ? (
        <DetailsItems changeTable={setSelectedRowData} tableData={capData[selectedRowData]?.items} />
      ) : (
        <TableCapsules changeTable={setSelectedRowData} tableData={capData} />
      )}
      <br />
    </div>
  );
};
export default App;