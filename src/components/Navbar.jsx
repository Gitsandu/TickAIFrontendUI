import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Menu,
    MenuItem,
  } from '@mui/material';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { Menu as MenuIcon } from '@mui/icons-material';
  import AuthDialog from './auth/AuthDialog';
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Documentation', path: '/docs' },
    { label: 'Contact Us', path: '/contact' },
  ];
  
  const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [authDialog, setAuthDialog] = useState({
      open: false,
      mode: 'login'
    });
  
    const handleAuthOpen = (mode) => {
      setAuthDialog({ open: true, mode });
    };
  
    const handleAuthClose = () => {
      setAuthDialog({ open: false, mode: 'login' });
    };
  
    const handleSetMode = (newMode) => {
      setAuthDialog({ ...authDialog, mode: newMode });
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleNavigation = (path) => {
      navigate(path);
      handleClose();
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 0, mr: 4, cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                Tick.AI
              </Typography>
  
              {isMobile ? (
                <>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {navItems.map((item) => (
                      <MenuItem
                        key={item.label}
                        onClick={() => handleNavigation(item.path)}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        color="inherit"
                        onClick={() => handleNavigation(item.path)}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.dark',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                </>
              )}
  
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => handleAuthOpen('login')}
                sx={{
                  ml: 2,
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Login
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
  
        <AuthDialog
          open={authDialog.open}
          mode={authDialog.mode}
          onClose={handleAuthClose}
          setMode={handleSetMode}
        />
  
      </Box>
    );
  };
  
  export default Navbar;