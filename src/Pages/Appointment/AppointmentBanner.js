import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate, footer }) => {


    return (
        <div class="hero flex justify-center min-h-screen lg:bg-[url('/src/assets/images/bg.png')] bg-none ">
            <div className='w-full' >

                <div class="hero-content max-w-full flex-col justify-evenly items-center lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}

                            footer={footer}
                        />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;