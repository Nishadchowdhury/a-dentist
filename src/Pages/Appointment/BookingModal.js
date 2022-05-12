import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();

        const slot = e.target.slot.value;
        console.log(slot);

        setTreatment(0)

    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-semibold text-lg "> Booking for <span className='font-bold  underline'>{name}</span> </h3>

                    {date ? <form onSubmit={handleBooking} className='grid grid-cols-1 gap-y-6 justify-items-center mt-12 ' >
                        <input type="text" readOnly value={format(date, 'PP')} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs"
                            placeholder='ok' >
                            {slots.map(slot => <option value={slot} > {slot} </option>)}

                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={'Submit'} class="btn btn-secondary input-bordered w-full max-w-xs" />
                    </form> : 'Please Select date'}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;