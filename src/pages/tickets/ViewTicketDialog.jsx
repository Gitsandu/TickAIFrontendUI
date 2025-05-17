import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Chip,
  Divider,
  Box,
} from '@mui/material';

const ViewTicketDialog = ({ open, onClose, ticket }) => {
  if (!ticket) return null;

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

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#757575';
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" component="div">
          Ticket #{ticket.id} - {ticket.title}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Chip
                label={ticket.status}
                color={getStatusColor(ticket.status)}
                sx={{ fontWeight: 'medium' }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: getPriorityColor(ticket.priority),
                  fontWeight: 'medium',
                }}
              >
                {ticket.priority} Priority
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Assigned To
            </Typography>
            <Typography variant="body1">{ticket.assignedTo}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Created At
            </Typography>
            <Typography variant="body1">{ticket.createdAt}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Category
            </Typography>
            <Typography variant="body1">{ticket.category || 'General'}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Description
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {ticket.description || 'No description provided.'}
            </Typography>
          </Grid>

          {ticket.attachments && ticket.attachments.length > 0 && (
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">
                Attachments
              </Typography>
              <Box sx={{ mt: 1 }}>
                {ticket.attachments.map((attachment, index) => (
                  <Chip
                    key={index}
                    label={attachment.name}
                    variant="outlined"
                    sx={{ mr: 1, mb: 1 }}
                    onClick={() => window.open(attachment.url)}
                  />
                ))}
              </Box>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ borderTop: 1, borderColor: 'divider', p: 2 }}>
        <Button variant="text" onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewTicketDialog;