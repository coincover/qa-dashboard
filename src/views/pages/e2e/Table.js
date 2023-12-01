import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TestDataTable = () => {
  // Mock data
  const testData = [
    { Date: '2023-01-01', Pass: 25, Fail: 2, Skip: 3 },
    { Date: '2023-01-02', Pass: 20, Fail: 5, Skip: 1 },
    { Date: '2023-01-03', Pass: 22, Fail: 1, Skip: 4 },
    { Date: '2023-01-04', Pass: 23, Fail: 3, Skip: 2 },
    { Date: '2023-01-05', Pass: 24, Fail: 0, Skip: 1 }
  ];

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
            <TableRow key={data.Date}>
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
