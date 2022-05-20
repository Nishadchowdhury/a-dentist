import React from 'react';
import { format } from 'date-fns';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate, footer }) => {

    const dateForLimit = format(new Date(), "P");



    const date2 = dateForLimit.toString().split('/')

    console.log(date);

    const [month, day, year] = [+date2[0], +date2[1], +date2[2]]

    // console.log(day, year, month, "day, year , month");


    return (
        <div className="hero flex justify-center min-h-screen lg:bg-[url('/src/assets/images/bg.png')] bg-none ">



            <div className="hero-content grid lg:grid-cols-2 grid-rows-1 justify-items-center  ">
                <div className='lg:order-1 order-10' >
                    <DayPicker
                        required
                        toMonth={new Date(year, month)}
                        fromDate={new Date((+year), (+month - 1), (+day + 0))}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                    />


                </div>
                <img src={chair} className="w-full rounded-lg shadow-2xl lg:order-2" alt='dentist chair' />

            </div>


        </div >
    );
};

export default AppointmentBanner;