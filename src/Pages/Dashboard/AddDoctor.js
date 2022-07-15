import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('doctorServicesName', () => fetch('https://doctors-portal-by-nishad.herokuapp.com/doctorServicesName').then(res => res.json()))

    

    const onSubmit = async data => {
        console.log('data', data);


        const imageStorageKey = '3e71ee8402adb8ecc47756f4a172b7ea';
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)


        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img,
                    }
                    // send to your's database
                    fetch('https://doctors-portal-by-nishad.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    }).then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast('Doctor add Successfully')
                                reset()
                            } else {
                                toast.error('Failed to add the doctor .');
                            }
                        })
                }
                console.log('image bb result', result)
            })

    }


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='card-body' >
            <h2 className='text-3xl' >Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text" placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }/* ,
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            } */
                        })} />
                    <label className="label">

                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}

                    </label>
                </div>



                <div>
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input

                        type="email" placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label className="label">

                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>




                <div>
                    <label className="label">
                        <span className="label-text">specialty</span>
                    </label>

                    <select {...register("specialty")}
                        className="select select-bordered w-full max-w-xs">
                        {services.map((name, i) => <option key={i} >{name.name}</option>)}
                    </select>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="file" placeholder="Type here"
                        className="input input-bordered w-full max-w-xs block  text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        file:mt-1
                        hover:file:bg-violet-100"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })} />
                    <label className="label">

                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>


                <div className='flex justify-center max-w-xs ' >
                    <input className="btn  block w-full  mt-3 mx-auto text-white " type="submit" value="ADD" />
                </div>
            </form>

        </div>
    );
};

export default AddDoctor;

