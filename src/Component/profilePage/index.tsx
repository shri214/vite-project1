import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
 
import './style.css';
import IndeterminateCheckbox from './Department';
import { Balance } from '@mui/icons-material';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Profile: React.FC = () => {
  const [fetchData, setFetchData] = useState<Post[]>([]);
  const navigation = useNavigate();

  // Columns definition
  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'USER-ID', flex:0.2 },
    { field: 'id', headerName: 'ID', flex:0.2 },
    { field: 'title', headerName: 'TITLE', flex:0.4, editable: true },
    { field: 'body', headerName: 'BODY', sortable: false, flex:0.6 },
  ];

  useEffect(() => {
    if (!localStorage.getItem('User')) {
      alert("First Sign up with the details");
      navigation('/');
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setFetchData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [navigation]);

  return (
    <>
    <Box sx={{ height: 631, width: '100%' }}>
      <DataGrid sx={{backgroundColor:'black', color:"white" }}
        rows={fetchData.map((post) => ({
          id: post.id,
          userId: post.userId,
          title: post.title,
          body: post.body,
        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    
    <div style={{backgroundColor:'black', color:"white", display:"flex", flexFlow:"column",alignItems:'center', width:'60%', margin:'10px auto'}}>
      <h1>Departments</h1>
    <IndeterminateCheckbox/>
    </div>
    </>
  );
};
