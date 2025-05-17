import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toolbar } from '@mui/material';

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Toolbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicLayout;
