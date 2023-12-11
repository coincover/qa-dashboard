import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Tooltip,
  Avatar
} from '@mui/material';
import MainCard from 'components/Cards/MainCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as moment from 'moment';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const lastResult = row.result[row.result.length - 1];

  const handleRowClick = (rowData, selected) => {
    window.open(`https://github.com/coincover/coincover-b2b2c/pull/${selected}`, '_blank');
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {moment(lastResult.date).format('DD/MM/YYYY h:mm:ss')}
        </TableCell>
        <TableCell
          align="right"
          onClick={() => handleRowClick(historyRow, row.pull_request)}
          hover
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          {row.pull_request}
        </TableCell>
        <TableCell>
          <Tooltip title={lastResult.author || 'Not assigned'}>
            <Avatar alt={lastResult.author} src={`https://ui-avatars.com/api/?name=${lastResult.author}`} />
          </Tooltip>
        </TableCell>
        <TableCell>{lastResult.commit}</TableCell>
        <TableCell align="right">{lastResult.percentage}%</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell align="right">Commit</TableCell>
                    <TableCell align="right">Function Coverage</TableCell>
                    <TableCell align="right">Line Coverage</TableCell>
                    <TableCell align="right">Statement Coverage</TableCell>
                    <TableCell align="right">Overall Coverage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.result.map((historyRow) => (
                    <TableRow
                      key={historyRow.date}
                      onClick={() => handleRowClick(historyRow, row.pull_request)}
                      hover
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell component="th" scope="row">
                        {moment(historyRow.date).format('DD/MM/YYYY h:mm:ss')}
                      </TableCell>
                      <TableCell>{historyRow.author}</TableCell>
                      <TableCell align="right">{historyRow.commit}</TableCell>
                      <TableCell align="right">{historyRow.function_coverage}%</TableCell>
                      <TableCell align="right">{historyRow.line_coverage}%</TableCell>
                      <TableCell align="right">{historyRow.statement_coverage}%</TableCell>
                      <TableCell align="right">{historyRow.percentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pull_request: PropTypes.string.isRequired,
    result: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        commit: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
        statement_coverage: PropTypes.string.isRequired,
        function_coverage: PropTypes.string.isRequired,
        branch_coverage: PropTypes.string.isRequired,
        line_coverage: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

const UnitTestDataTable = ({ isLoading, data }) => {
  const theme = useTheme();

  return (
    <>
      {!isLoading && data.length > 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Date</TableCell>
                <TableCell align="right">Pull Request</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Commit</TableCell>
                <TableCell align="right">Overall Coverage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <MainCard sx={{ boxShadow: theme.shadows[6] }}>
          <Typography sx={{ textAlign: 'center' }}>No Data</Typography>
        </MainCard>
      )}
    </>
  );
};

UnitTestDataTable.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array
};

export default UnitTestDataTable;
