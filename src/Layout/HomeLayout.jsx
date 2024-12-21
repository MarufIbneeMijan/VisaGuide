import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='font-Montserrat'>
            <header>
            <Header></Header>
            </header>
            <main>
                <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            </main>
            <div className='max-h-svh' >

            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;