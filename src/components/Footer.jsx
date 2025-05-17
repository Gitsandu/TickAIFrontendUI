import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, Pinterest, GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems = [
        { title: 'Company', items: ['About Us', 'Team', 'Products', 'Blog', 'License'] },
        { title: 'Resources', items: ['Documentation', 'Support', 'Terms of Service', 'Privacy Policy'] },
        { title: 'Contact', items: ['Contact Us', 'Feedback', 'Help Center', 'FAQ'] }
    ];

    const socialIcons = [
        { icon: Facebook, link: '#' },
        { icon: Twitter, link: '#' },
        { icon: Instagram, link: '#' },
        { icon: Pinterest, link: '#' },
        { icon: GitHub, link: '#' }
    ];

    return (
        <Box component="footer" sx={{ py: 6, px: 2, mt: 'auto', backgroundColor: '#f8f9fa' }} >
            <Grid container spacing={2}>
                {navItems.map((section, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {section.title}
                        </Typography>
                        {section.items.map((item, idx) => (
                            <Typography
                                key={idx}
                                component={Link}
                                to="#"
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'left',
                                    mb: 1,
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                }}            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
                    Copyright © 2025 Material by Creative Tim.
                </Typography>
                <Box>
                    {socialIcons.map((social, index) => (
                        <IconButton
                            key={index}
                            component={Link}
                            to={social.link}
                            color="inherit"
                            sx={{ ml: 1 }}
                        >
                            <social.icon />
                        </IconButton>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;