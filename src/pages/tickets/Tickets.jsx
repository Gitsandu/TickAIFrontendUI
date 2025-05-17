import { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Button,
  TablePagination,
} from '@mui/material';
import ViewTicketDialog from './ViewTicketDialog';
import VisibilityIcon from '@mui/icons-material/Visibility';

const mockTickets = [
  {
    id: 1,
    title: 'Login Issue',
    status: 'Open',
    priority: 'High',
    category: 'Authentication',
    description: 'Users are unable to log in using their credentials. The system shows an error message after multiple attempts.',
    assignedTo: 'John Doe',
    createdAt: '2024-01-15',
    attachments: [
      { name: 'error_screenshot.png', url: '#' },
      { name: 'error_log.txt', url: '#' }
    ]
  },
  {
    id: 2,
    title: 'Payment Failed',
    status: 'In Progress',
    priority: 'Medium',
    category: 'Billing',
    description: 'Payment transaction fails when using Visa credit card. Error occurs at the final step of checkout.',
    assignedTo: 'Jane Smith',
    createdAt: '2024-01-14',
  },
  {
    id: 3,
    title: 'Feature Request',
    status: 'Closed',
    priority: 'Low',
    category: 'Enhancement',
    description: 'Request for dark mode theme implementation across the application.',
    assignedTo: 'Mike Johnson',
    createdAt: '2024-01-13',
  },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'open':
      return 'error';
    case 'in progress':
      return 'warning';
    case 'closed':
      return 'success';
    default:
      return 'default';
  }
};

const Tickets = () => {
  const [tickets] = useState(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setViewDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setViewDialogOpen(false);
    setSelectedTicket(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tickets.length) : 0;

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Support Tickets
      </Typography>
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'hidden',
          width: '100%',
          flex: 1,
          '& .MuiTable-root': {
            width: '100%'
          }
        }}
      >
        <Table sx={{ minWidth: 650, width: '100%' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Priority</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Assigned To</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : tickets
            ).map((ticket) => (
              <TableRow 
                key={ticket.id}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  <Chip
                    label={ticket.status}
                    color={getStatusColor(ticket.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.assignedTo}</TableCell>
                <TableCell>{ticket.createdAt}</TableCell>
                <TableCell>
                  <Button
                    startIcon={<VisibilityIcon />}
                    size="small"
                    variant="outlined"
                    onClick={() => handleViewTicket(ticket)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tickets.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <ViewTicketDialog
        open={viewDialogOpen}
        onClose={handleCloseDialog}
        ticket={selectedTicket}
      />
    </Box>
  );
};

export default Tickets;