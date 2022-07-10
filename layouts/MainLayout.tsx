import React from 'react';
import Navbar from '../components/navbar';
import { Container } from '../node_modules/@mui/material/index';

const MainLayout: React.FC = ({ children }) => {

    return (
        <>

            <Navbar></Navbar>
            <Container style={{}}>
                {children}
            </Container>
        </>
    );

};

export default MainLayout;