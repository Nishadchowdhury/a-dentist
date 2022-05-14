import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const [user, l, e] = useAuthState(auth);

    const { name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();

        const slot = e.target.slot.value;
        console.log(slot);

        setTreatment(0)

    }

    return (
        <div className='' >

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-lg "> Booking for <span className='font-bold  underline'>{name}</span> </h3>

                    {date ? <form onSubmit={handleBooking} className='grid grid-cols-1 gap-y-6 justify-items-center mt-12 ' >
                        <input type="text" readOnly value={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs"
                            placeholder='ok' >
                            {slots.map((slot, index) =>

                                <option value={slot} key={index} > {slot} </option>)}

                        </select>
                        <input type="text" name='name' readOnly value={user?.displayName || 'Your Name'} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' readOnly value={user?.email || 'Your Email'} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={'Submit'} className="btn btn-secondary input-bordered w-full max-w-xs" />
                    </form> : 'Please Select date'}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;