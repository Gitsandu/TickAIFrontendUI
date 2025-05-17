import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { Person, Support, Refresh } from '@mui/icons-material';
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

// Define features
const features = [
  {
    icon: <Person sx={{ fontSize: 40, color: '#E91E63' }} />,
    title: 'Check our team',
    description: 'People in this world shun people for being great. For being a bright color. For standing out.'
  },
  {
    icon: <Support sx={{ fontSize: 40, color: '#2196F3' }} />,
    title: 'Support 24/7',
    description: 'We get insulted by others, lose trust for those others. We get back here to follow my dreams.'
  },
  {
    icon: <Refresh sx={{ fontSize: 40, color: '#FF9800' }} />,
    title: 'Unlimited revisions',
    description: 'The time is now to be okay to be the greatest you. Would you believe in what you believe in?'
  }
];

const Feature = () => {
  return (
    <Box sx={{ bgColor: '#F8F9FA', py: 5 }}>
      <Grid container justifyContent="center" spacing={2} sx={{ mt: 3, mb: 2 }}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 1, fontWeight: 'bold' }}
          >
            Turn your idea into a startup
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            We're constantly trying to express ourselves and actualize our dreams.
            If you have the opportunity to play
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} padding={2} justifyContent={"center"} sx={{ mb: 3 }}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Item>
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h5" sx={{ mb: 1, color: '#2B3445', fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#7D879C' }}>
                {feature.description}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feature;
