import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as moment from 'moment';

const TestDataTable = ({ isLoading, data }) => {
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
          {data.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{moment(d.Date).format('DD/MM/YY')}</TableCell>
              <TableCell>{d.Pass}</TableCell>
              <TableCell>{d.Fail}</TableCell>
              <TableCell>{d.Skip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TestDataTable.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array
};

export default TestDataTable;
