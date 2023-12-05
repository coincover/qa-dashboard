import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as moment from 'moment';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: 'auto',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4
};
const TestDataTable = ({ isLoading, data }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
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
              <TableRow
                key={d.id}
                onClick={() => handleRowClick(d)}
                hover // Add hover property for hover effect
                style={{ cursor: 'pointer' }} // Change cursor on hover
              >
                <TableCell>{moment(d.date).format('DD/MM/YY')}</TableCell>
                <TableCell>{d.pass}</TableCell>
                <TableCell>{d.fail}</TableCell>
                <TableCell>{d.skip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={isModalOpen} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedRowData?.date}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <iframe
              src={`https://coincover.github.io/coincover-amt/ledger/functional/2023-12-05/index.html`}
              title="Modal Iframe"
              width="100%"
              height="400px"
            ></iframe>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

TestDataTable.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array
};

export default TestDataTable;
