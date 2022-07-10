import React from 'react';
import Navbar from '../components/navbar';
import MainLayout from '../layouts/MainLayout';


const Index = () => {

    return (
        <>
            <MainLayout> <div className='center'>
                <h1>Welcome to the club buddy!</h1>
                <h3>So take a look...</h3>
            </div>
          
            </MainLayout>

            <style jsx>{`

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`}



            </style>

        </>
    );

};

export default Index;