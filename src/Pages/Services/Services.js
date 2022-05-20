import React from 'react';
import tooth from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import doctorSmall from '../../assets/images/doctor-small.png'
import MainGradiantBtn from '../Shared/MainGradiantBtn';

const Services = () => {

    const datas = [
        { img: tooth, title: "Fluoride Treatment", description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { img: cavity, title: "Cavity Filling", description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { img: whitening, title: "Teeth Whitening", description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
    ]

    return (
        <div className='w-full'>
            <div className='mb-[70px]' >
                <h1 className='text-center text-primary font-sans text-xl font-bold' >OUR SERVICES</h1>
                <h1 className='text-center font-sans font-normal text-4xl  ' >Services We Provide</h1>
            </div>

            <div className='flex lg:flex-row flex-col justify-center items-center  gap-4 mb-[154px]' >

                {
                    datas.map((data, i) =>


                        <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.img} alt="Shoes" /></figure>
                            <div className="card-body text-center ">
                                <h2 className="">{data.title}</h2>
                                <p className=''>{data.description}</p>

                            </div>
                        </div>)
                }
            </div>


            <div className='flex justify-center mb-[70px]' >

                <div className="hero-content grid lg:grid-cols-2 grid-rows-1   gap"

                >
                    <div className='flex justify-center' >
                        <img src={treatment} className="w-[458px] rounded-lg shadow-2xl " alt='' />
                    </div>
                    <div className='' >
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                        <MainGradiantBtn>Get Started</MainGradiantBtn>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Services;