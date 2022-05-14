import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate, footer }) => {


    return (
        <div className="hero flex justify-center min-h-screen lg:bg-[url('/src/assets/images/bg.png')] bg-none ">


            <div className="hero-content grid lg:grid-cols-2 grid-rows-1 justify-items-center  ">
                <div className='lg:order-1 order-10' >
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                        footer={footer}
                    />

                </div>
                <img src={chair} className="w-full rounded-lg shadow-2xl lg:order-2" alt='dentist chair' />
            </div>


        </div>
    );
};

export default AppointmentBanner;