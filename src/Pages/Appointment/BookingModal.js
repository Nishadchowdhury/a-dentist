import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const [user, l, e] = useAuthState(auth);
    const formatedDate = format(date, 'PP');


    const { name, slots, _id, price } = treatment;
    const handleBooking = e => {
        e.preventDefault();

        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            time: slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
            price,
        }

        fetch('https://doctors-portal-by-nishad.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set , ${formatedDate} at ${slot} `)
                } else {
                    toast.error(`You already have an appointment Today at ${data?.booking.time}`)
                }
                refetch();
                setTreatment(null);
            })
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
                        <input type="text" required name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={'Submit'} className="btn btn-secondary input-bordered w-full max-w-xs" />
                    </form> : 'Please Select date'}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;