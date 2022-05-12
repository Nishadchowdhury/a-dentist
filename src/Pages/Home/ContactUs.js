import React from 'react';
import MainGradiantBtn from '../Shared/MainGradiantBtn';
import bg from '../../assets/images/appointment.png'


const ContactUs = () => {
    const handleLogin = e => {
        e.preventDefault();


    }

    return (
        <section className='flex flex-col justify-center pb-16'
            style={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',

            }}
        >
            <div className='mb-10' >
                <h1 className='text-center font-bold text-xl font-sans text-primary mt-16 ' >Contact Us</h1>
                <h1 className='text-center font-sans font-normal text-3xl text-white' >Stay connected with us</h1>

            </div>
            <div className='flex justify-center' >


                <form onSubmit={handleLogin} className='flex flex-col w-[450px] gap-5 ' >
                    <input type="text" placeholder="Type here" className=" input input-bordered input-neutral w-full " />
                    <input type="text" placeholder="Type here" className=" input input-bordered input-neutral w-full " />
                    <textarea className="textarea textarea-neutral h-32  " placeholder="Bio"></textarea>

                    <div className='flex justify-center' >
                        <MainGradiantBtn type='submit'  > Submit </MainGradiantBtn>
                    </div>

                </form>



            </div>

        </section>
    );
};

export default ContactUs;