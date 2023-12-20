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
const TestDataTable = ({ data }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleToValue = (value) => {
    switch (value) {
      case 'Identity Service':
        return 'identity-service';
      case 'Disaster Recovery':
        return 'disaster-recovery';
      case 'Ledger Support Tool':
        return 'ledger';
      case 'Transaction Protection':
        return 'transaction-protection';
      case 'Recovery As A Service':
        return 'recovery-as-a-service';
      default:
        return value;
    }
  };
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
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {selectedRowData?.title} Test Run at {moment(selectedRowData?.date).format('DD/MM/YY')}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <iframe
              src={`https://coincover.github.io/coincover-amt/${titleToValue(selectedRowData?.title)}/functional/${moment(
                selectedRowData?.date
              ).format('YYYY-MM-DD')}/index.html`}
              title="Modal Iframe"
              width="100%"
              height="600px"
            ></iframe>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

TestDataTable.propTypes = {
  data: PropTypes.array
};

export default TestDataTable;
