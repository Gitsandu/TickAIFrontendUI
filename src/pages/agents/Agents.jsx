import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
} from '@mui/material';

const mockAgents = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Online',
    role: 'Senior Support',
    activeTickets: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'Offline',
    role: 'Technical Support',
    activeTickets: 3,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    status: 'Online',
    role: 'Customer Support',
    activeTickets: 4,
  },
];

const Agents = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Agents
      </Typography>
      <Grid container spacing={4}>
        {mockAgents.map((agent) => (
          <Grid size={{xs: 12, md: 4}} key={agent.id}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      mr: 2,
                      bgcolor: 'primary.main',
                      fontSize: '1.5rem',
                    }}
                  >
                    {agent.name.split(' ').map((n) => n[0]).join('')}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {agent.name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {agent.email}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    p: 2,
                    backgroundColor: 'background.default',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Role
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {agent.role}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    p: 2,
                    backgroundColor: 'background.default',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Active Tickets
                  </Typography>
                  <Chip
                    label={agent.activeTickets}
                    color="primary"
                    size="small"
                  />
                </Box>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Chip
                    label={agent.status}
                    color={agent.status === 'Online' ? 'success' : 'default'}
                    size="small"
                    sx={{ minWidth: 80 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Agents;