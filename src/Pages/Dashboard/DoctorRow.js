import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteingDr }) => {
    const { name, specialty, img, email } = doctor;



    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-14 mask mask-squircle">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeleteingDr(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;