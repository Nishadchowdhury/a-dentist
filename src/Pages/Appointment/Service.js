import React, { useState } from 'react';
import MainGradiantBtn from '../Shared/MainGradiantBtn';

const Service = ({ service, setTreatment }) => {
    const { name, slots, } = service;


    return (
        <div className="card max-w-lg bg-base-100 shadow-xl text-primary-content">
            <div className="card-body">
                <h2 className='text-primary card-title text-center'><p>{name}</p></h2>

                <p className=' font-sans font-normal text-sm text-center' >
                    {
                        slots.length ? <span >{slots[0]}</span> : <span className='text-red-500' >Try Another date</span>
                    }
                </p>

                <p className=' font-sans font-normal text-xs text-center'  >{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}  Available</p>
                <div className="card-actions justify-center">
                    {/* <MainGradiantBtn > Book Appointment </MainGradiantBtn> */}



                    <label
                        htmlFor="booking-modal" className="btn btn-primary text-white uppercase "
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    > Book Appointment
                    </label>

                </div>
            </div>

        </div>
    );
};

export default Service;