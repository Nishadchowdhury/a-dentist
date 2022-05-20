import { format } from 'date-fns';
import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {


    const [date, setDate] = useState(new Date());

    let footer = <p className='bg-secondary rounded-md p-3 first-letter flex justify-evenly ' > <span className='bg-white  bg-opacity-30 rounded-md px-3 inline-block ' > Please pick a day</span></p>;

    if (date) {
        footer = <p className='bg-secondary rounded-md p-3 first-letter flex justify-evenly ' >You have Selected <span className='bg-white  bg-opacity-30 rounded-md px-3 inline-block ' > {format(date, 'PP')}</span></p>;
    }

    return (
        <div>

            <AppointmentBanner date={date} setDate={setDate} footer={footer} />

            <AvailableAppointments date={date} />

            <Footer />
        </div>
    );
};

export default Appointment;