import { Box, Container } from '@mui/material';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          width: `calc(100% - 240px)`,
        }}
      >
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;