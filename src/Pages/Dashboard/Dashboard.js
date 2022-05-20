import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">

                <h2 className='text-4xl text-purple-500 font-sans font-bold ' > Welcome to your Dashboard  </h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='font-sans font-normal text-xs' >My Appointments</Link></li>
                    <li><Link to='/dashboard/review' className='font-sans font-normal text-xs' >My Reviews</Link></li>
                    <li><Link to='/dashboard/history' className='font-sans font-normal text-xs' >My History</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users' className='font-sans font-normal text-xs' >All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor' className='font-sans font-normal text-xs' >Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDr' className='font-sans font-normal text-xs' >Manage Dr</Link></li>
                    </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;