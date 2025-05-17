import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '../../assets/images/1747495292365.jpg';
import slide2 from '../../assets/images/1747495395530.jpg';
import slide3 from '../../assets/images/1747495419531.jpg';

const slides = [
  {
    title: 'AI-Powered Customer Support',
    description: 'Leverage cutting-edge AI technology to provide instant, accurate responses to customer inquiries',
    image: slide1
  },
  {
    title: 'Smart Ticket Routing',
    description: 'Automatically assign tickets to the right team members using AI-based analysis',
    image: slide2
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor support performance and customer satisfaction with advanced analytics',
    image: slide3
  }
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      style={{ width: '100%', height: '95vh' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.7,
                zIndex: 1
              }
            }}
          >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    mb: 3,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3.5rem' },
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: '#ffffff',
                    maxWidth: '800px',
                    fontSize: { xs: '1rem', md: '1.5rem' },
                  }}
                >
                  {slide.description}
                </Typography>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;