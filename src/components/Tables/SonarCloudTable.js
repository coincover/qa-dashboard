import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Avatar, Tooltip } from '@mui/material';
import Paper from '@mui/material/Paper';
import { IconGitPullRequest, IconSquareCheck, IconSquareX } from '@tabler/icons';
import * as moment from 'moment';

const SonarCloudTable = ({ data }) => {
  function stringAvatar(name) {
    const words = name.split(' ');

    if (words.length === 1) {
      return {
        children: `${name[0]}`
      };
    } else {
      return {
        children: `${words[0][0]}${words[1][0]}`
      };
    }
  }
  const handleRowClick = (rowData) => {
    window.open(rowData.url, '_blank');
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pull Request</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Checked Date</TableCell>
              <TableCell>Commit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((d) => (
              <TableRow key={d.id} onClick={() => handleRowClick(d)} hover style={{ cursor: 'pointer' }}>
                <TableCell>
                  <Typography sx={{ fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                    <IconGitPullRequest /> {d.key} - {d.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  {d.status.qualityGateStatus === 'OK' ? <IconSquareCheck color="#7bc62d" /> : <IconSquareX color="#ff4500" />}
                </TableCell>
                <TableCell>
                  <Tooltip title={d.commit?.author?.name}>
                    <Avatar {...stringAvatar(d.commit?.author?.name)} />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title={moment(d.analysisDate).format('MMMM Do YYYY, h:mm:ss a')}>
                    {moment(d.analysisDate).startOf('hour').fromNow()}
                  </Tooltip>
                </TableCell>
                <TableCell>{d.commit.sha.substring(0, 7)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

SonarCloudTable.propTypes = {
  data: PropTypes.array
};

export default SonarCloudTable;