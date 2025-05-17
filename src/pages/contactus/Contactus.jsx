import React from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';

function Contactus() {
    return (
        <Box sx={{ bgColor: '#F8F9FA', py: 5 }}>
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid size={{ xs: 12 }}>
                <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 1, fontWeight: 'bold' }}
            >
                        Get in Touch
                    </Typography>
                    <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
                        Have questions, feedback, or partnership ideas? We're here to help.<br />
                        Fill out the form below or email us directly at{' '}
                        <a href="mailto:hello@creative-tim.com" style={{ color: '#1976d2' }}>
                            hello@creative-tim.com
                        </a>.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Button variant="contained" color="primary" >
                        Submit
                    </Button>
                </Grid>
            </Grid>

        </Box>
    );
}

export default Contactus;
