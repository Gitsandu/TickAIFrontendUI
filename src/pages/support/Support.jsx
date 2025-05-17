import { Box, Card, CardContent, TextField, Button, Typography, MenuItem } from '@mui/material';

const Support = () => {
  const categories = [
    'Technical Issue',
    'Account Problem',
    'Billing Question',
    'Feature Request',
    'Other'
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Support
      </Typography>
      <Card sx={{ maxWidth: 800, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Contact Support
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              required
              fullWidth
              label="Subject"
              margin="normal"
            />
            <TextField
              required
              select
              fullWidth
              label="Category"
              margin="normal"
              defaultValue=""
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              fullWidth
              label="Description"
              multiline
              rows={4}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Contact Email"
              type="email"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Attachment"
              type="file"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Submit Request
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Support;