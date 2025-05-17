import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';

const AuthDialog = ({ open, onClose, mode, setMode }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {mode === 'login' ? 'Login to TicketSystem' : 'Sign Up Your Company'}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {mode === 'login' ? (
          <Login switchMode={setMode} onClose={onClose} />
        ) : (
          <Signup switchMode={setMode} onClose={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

AuthDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['login', 'signup']).isRequired,
  setMode: PropTypes.func.isRequired,
};

export default AuthDialog;