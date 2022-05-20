import auth from '../../firebase.init';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {

    const [user, l, e] = useAuthState(auth);

    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-by-nishad.herokuapp.com/booking?patientEmail=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => {



                    setAppointments(data);
                })
        }
    }, [user])

    console.log(appointments);

    return (
        <div>
            <h2>MyAppointment: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, i) => <tr key={i} >
                                <th>{i + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.time}</td>
                                <td>{a.treatment}</td>
                                <td>

                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} > <button className='btn btn-xs btn-success' >Pay Now </button> </Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success' >Paid</span></p>
                                        <p>Transaction id: <span className='text-orange-500 text-xs' > {a.transactionId} </span> </p>
                                    </div>}

                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;