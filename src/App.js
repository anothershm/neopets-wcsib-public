import './App.css';
import React, { useState, useEffect } from 'react';
import capData from "./capsules_data.json";
import { TableCapsules } from "./components/tables/tableCapsules";
import { DetailsItems } from './components/detailsItems';
import { useQuery, gql } from '@apollo/client';


import { TextField } from '@mui/material';
import { Button } from '@mui/material';


const userIdPattern = /^https:\/\/impress(?:-2020)?\.openneo\.net\/user\/(\d+)(?:-[a-z]+)?\/(lists|closet)$/;

const useUserQuery = (userId, shouldFetch) => {
  return useQuery(GET_USER, {
    variables: { id: userId },
    skip: !shouldFetch,
  });
}



const App = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [inputUrl, setInputUrl] = useState('');
  const [userId, setUserId] = useState('');
  const [submit, setSubmit] = useState(false);
  const [userWants, setUserWants] = useState('');


  const { loading, error, data } = useUserQuery(userId, submit);

  useEffect(() => {
    if (submit && data) {
      const user = data.user;
      setUserWants(user.itemsTheyWant.map((item) => item.name));
      
      console.log(userWants)
    }
  }, [submit, data]);

  const handleUrlChange = (event) => {
    setInputUrl(event.target.value);
    setSubmit(false);
  };

  const handleUrlSubmit = (event) => {
    event.preventDefault();
    const match = inputUrl.match(userIdPattern);
    if (match) {
      setUserId(match[1])
      setSubmit(true);
    }
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
        <DetailsItems changeTable={setSelectedRowData} tableData={capData[selectedRowData]?.items} userWants={userWants}/>
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



const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      itemsTheyWant {
        name
      }
    }
  }
`;
