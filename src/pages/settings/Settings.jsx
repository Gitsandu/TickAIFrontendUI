import { Box, Card, CardContent, Grid, TextField, Button, Typography, Switch, FormControlLabel, Paper } from '@mui/material';

const Settings = () => {
  return (
    <Box sx={{ p: 3 }}>

      <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12 }}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h4">Settings</Typography>
                    </Paper>
                </Grid>
            </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Settings
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  required
                  fullWidth
                  label="Display Name"
                  margin="normal"
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                />
                <TextField
                  required
                  fullWidth
                  label="Current Password"
                  type="password"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Save Changes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Preferences
              </Typography>
              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email Notifications"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Desktop Notifications"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Sound Notifications"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;