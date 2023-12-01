import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from '../../../services/get';

const TestDataTable = () => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setTestData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Pass</TableCell>
            <TableCell>Fail</TableCell>
            <TableCell>Skip</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.Date}</TableCell>
              <TableCell>{data.Pass}</TableCell>
              <TableCell>{data.Fail}</TableCell>
              <TableCell>{data.Skip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestDataTable;
