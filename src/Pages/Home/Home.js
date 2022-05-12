import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='' >
            <Banner />
            {/* <Info/> */}
            <Services />
            <MakeAppoinment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;