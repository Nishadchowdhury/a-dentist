import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const toDay = date ? ": " + format(date, 'PP') : <span className='' > Select your day </span>;

    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/doctorServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='px-12' >
            <p className='font-sans font-normal text-xl text-primary text-center mt-4' > Available Appointments on {toDay}</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ' >
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointments;