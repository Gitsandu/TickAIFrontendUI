import { Box, Button, Container, TextField, Typography, Grid } from '@mui/material';

const Newsletter = () => {
  return (
    <Box sx={{ bgColor: '#F8F9FA', py: 5 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* First Grid Item */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 1, fontWeight: 'bold' }}
            >
              Get Tips & Tricks every Week!
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Join our newsletter and get news in your inbox every week!
            </Typography>
          </Box>
        </Grid>

        {/* Second Grid Item */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', width: '100%', gap: 1 }}>
            <TextField
              fullWidth
              placeholder="Your Email..."
              sx={{
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#E3E9EF'
                  },
                  '&:hover fieldset': {
                    borderColor: '#DAE1E7'
                  }
                }
              }}
            />
                    <Button variant="contained" color="primary" >

              SUBSCRIBE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
