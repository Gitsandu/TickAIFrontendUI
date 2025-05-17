import { Box, Card, CardContent, Typography, FormControlLabel, Switch, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Notifications = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Notification Settings
      </Typography>
      <Card sx={{ maxWidth: 800, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Email Notifications
          </Typography>
          <Box sx={{ mb: 4 }}>
            <FormControlLabel
              required
              control={<Switch defaultChecked />}
              label="New Ticket Alerts"
            />
            <FormControlLabel
              required
              control={<Switch defaultChecked />}
              label="Ticket Updates"
            />
            <FormControlLabel
              required
              control={<Switch defaultChecked />}
              label="Assignment Notifications"
            />
          </Box>

          <Typography variant="h6" gutterBottom>
            Notification Frequency
          </Typography>
          <FormControl required fullWidth margin="normal">
            <InputLabel>Email Digest Frequency</InputLabel>
            <Select
              defaultValue="daily"
              label="Email Digest Frequency"
            >
              <MenuItem value="instant">Instant</MenuItem>
              <MenuItem value="hourly">Hourly</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
            Custom Notification Hours
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              required
              label="Start Time"
              type="time"
              defaultValue="09:00"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              required
              label="End Time"
              type="time"
              defaultValue="17:00"
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <Typography variant="h6" gutterBottom>
            Desktop Notifications
          </Typography>
          <Box sx={{ mb: 4 }}>
            <FormControlLabel
              required
              control={<Switch defaultChecked />}
              label="Enable Desktop Notifications"
            />
            <FormControlLabel
              required
              control={<Switch defaultChecked />}
              label="Show Preview"
            />
            <FormControlLabel
              required
              control={<Switch defaultChecked />}
              label="Play Sound"
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Save Preferences
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notifications;