import React from 'react';
import drSmall from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import MainGradiantBtn from '../Shared/MainGradiantBtn';

const MakeAppoinment = () => {



    return (
        <section className='mb-20' style={{
            background: `url(${appointment})`,
        }} >
            <div className='flex justify-center mt-[140px]  ' >

                <div className="hero-content grid lg:grid-cols-2 grid-rows-1 gap lg:p-0 "

                >
                    <div className=' hidden lg:flex justify-center' >
                        <img src={drSmall} className="w-[458px]  mt-[-100px] " alt='' />
                    </div>
                    <div className='text-white' >
                        <h1 className='text-primary font-sans font-bold text-xl' >Appointment</h1>
                        <h1 className=" font-sans font-semibold text-4xl ">Make an appointment Today</h1>
                        <p className="py-6 font-sans font-normal text-base ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <MainGradiantBtn>Get Started</MainGradiantBtn>

                    </div>
                </div>
            </div>



        </section>
    );
};

export default MakeAppoinment;