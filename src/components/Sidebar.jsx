import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, ConfirmationNumber, People, Support, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/org/dashboard' },
  { text: 'Tickets', icon: <ConfirmationNumber />, path: '/org/tickets' },
  { text: 'Support Agents', icon: <People />, path: '/org/agents' },
  { text: 'Support', icon: <Support />, path: '/org/support' },
  { text: 'Settings', icon: <Settings />, path: '/org/settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1976d2',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Tick.AI
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;