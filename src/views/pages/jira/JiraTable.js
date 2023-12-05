import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as moment from 'moment';

const JiraTable = ({ data }) => {
  const handleRowClick = (rowData) => {
    window.open(`https://coincover.atlassian.net/browse/${rowData.key}`, '_blank');
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Jira Number</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((d) => (
              <TableRow
                key={d.id}
                onClick={() => handleRowClick(d)}
                hover // Add hover property for hover effect
                style={{ cursor: 'pointer' }} // Change cursor on hover
              >
                <TableCell>{d.key}</TableCell>
                <TableCell>{d.fields.summary}</TableCell>
                <TableCell>{d.fields.status.name}</TableCell>
                <TableCell>{moment(d.fields.created).format('MMMM DD, YYYY hh:mm:ss A')}</TableCell>
                <TableCell>{moment(d.fields.updated).format('MMMM DD, YYYY hh:mm:ss A')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

JiraTable.propTypes = {
  data: PropTypes.array
};

export default JiraTable;
