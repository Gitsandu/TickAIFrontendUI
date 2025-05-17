import { Avatar, Box, Grid, Paper, Rating, Typography } from '@mui/material';
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

const testimonials = [
  {
    id: 1,
    name: 'Matthew Glock',
    date: '1 day ago',
    avatar: '/avatars/avatar1.jpg',
    rating: 4,
    comment: 'If you have the opportunity to play this game of life you need to appreciate every moment.'
  },
  {
    id: 2,
    name: 'Matthew Glock',
    date: '28 February',
    avatar: '/avatars/avatar2.jpg',
    rating: 3,
    comment: 'If you have the opportunity to play this game of life you need to appreciate every moment.'
  },
  {
    id: 3,
    name: 'Matthew Glock',
    date: '3 days ago',
    avatar: '/avatars/avatar3.jpg',
    rating: 5,
    comment: 'If you have the opportunity to play this game of life you need to appreciate every moment.'
  }
];

const Testimonial = () => {
  return (
    <Box sx={{ bgColor: '#F8F9FA', py: 5 }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ mb: 1, fontWeight: 'bold' }}
      >
        Think about us
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        That's the main thing people are controlled by! Thoughts - their perception of themselves!
      </Typography>

      <Grid container spacing={2} sx={{mb: 3}}>
        {testimonials.map((testimonial) => (
          <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
            <Item>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#fff',
                  borderRadius: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mr: 2,
                      bgcolor: '#E0E0E0',
                      color: '#9E9E9E',
                      fontSize: '1.25rem'
                    }}
                  >
                    {testimonial.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.date}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ mb: 2, flex: 1 }}>
                  "{testimonial.comment}"
                </Typography>
                <Rating value={testimonial.rating} readOnly />
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;