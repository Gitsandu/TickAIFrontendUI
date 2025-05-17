import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Layout from './components/Layout';
import PublicLayout from './components/PublicLayout';
import Landing from './pages/main/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Tickets from './pages/tickets/Tickets';
import Agents from './pages/agents/Agents';
import Contactus from './pages/contactus/Contactus';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    background: { default: '#f5f5f5' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<Landing />} />
            <Route path="/pricing" element={<Landing />} />
            <Route path="/blogs" element={<Landing />} />
            <Route path="/contact" element={<Contactus />} />
          </Route>

          {/* Routes with different layout (like dashboard) */}
          <Route element={<Layout />}>
            <Route path="/org/dashboard" element={<Dashboard />} />
            <Route path="/org/tickets" element={<Tickets />} />
            <Route path="/org/agents" element={<Agents />} />
            <Route path="/org/support" element={<Dashboard />} />
            <Route path="/org/settings" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
