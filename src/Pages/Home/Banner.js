import React from 'react';
import chair from '../../assets/images/chair.png'
import Info from './Info';
import MainGradiantBtn from '../Shared/MainGradiantBtn';

const Banner = () => {
    return (
        <div className='mb-32 lg:px-12 px-6' >
            <div className="hero min-h-screen  lg:bg-[url('/src/assets/images/bg.png')] "  >
                <div className="hero-content grid lg:grid-cols-2 grid-rows-1   gap"

                >
                    <div className='order-2 lg:order-1' >
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                        <MainGradiantBtn> Get Started </MainGradiantBtn>
                    </div>
                    <img src={chair} className="w-full rounded-lg shadow-2xl lg:order-2" alt='' />
                </div>
            </div>
            <Info />

        </div >
    );
};

export default Banner;