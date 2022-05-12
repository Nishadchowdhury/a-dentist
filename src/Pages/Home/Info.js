import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    const data = [
        { id: 1, title: 'Opening Hours', description: 'Lorem Ipsum is simply dummy text of the pri', icon: clock, Gradient: true },
        { id: 2, title: 'Opening Hours', description: 'Lorem Ipsum is simply dummy text of the pri', icon: marker, Gradient: false },
        { id: 3, title: 'Opening Hours', description: 'Lorem Ipsum is simply dummy text of the pri', icon: phone, Gradient: true },
    ]

    return (
        <div className='flex gap-4 justify-evenly lg:px-12 lg:flex-row flex-col' >
            {
                data.map(info => <InfoCard key={info.id} details={info} />)
            }
        </div>
    );
};

export default Info;