import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviwe from './Reviwe';

const Testimonial = () => {
    const reviweText = 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    const address = 'California'
    const name = 'Winson Herry'

    const reviwes = [
        {
            _id: 1,
            name,
            reviweText,
            address,
            img: people1
        },
        {
            _id: 2,
            name,
            reviweText,
            address,
            img: people2
        },
        {
            _id: 3,
            name,
            reviweText,
            address,
            img: people3
        },
    ]

    return (
        <section className='px-12 mb-36 '>
            <div >

                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <h1 className='font-sans text-xl font-bold' >Testimonial</h1>
                        <h1 className='font-sans text-4xl font-normal' >What Our Patients Says</h1>

                    </div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />

                </div>


                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5' >
                    {
                        reviwes.map(reviwe => <Reviwe key={reviwe._id} data={reviwe} />)
                    }
                </div>

            </div>

        </section>
    );
};

export default Testimonial;