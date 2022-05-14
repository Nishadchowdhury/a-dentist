import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const SingUp = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const [userok] = useAuthState(auth);

    let errorMessage;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
    }


    if (loading) {
        return <Loading />
    }

    if (error || errorG || errorUpdate) {
        errorMessage = <p className='text-red-500 text-xs' > {error?.message || errorUpdate?.message || errorG?.message} </p>
    }



    console.dir(userok || 'no');

    return (
        <section className='flex flex-col justify-center items-center h-screen pb-16'>

            <div className=" w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">SignUp</h2>

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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or longer'
                                    }

                                })} />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>


                        <div className='flex justify-center' >
                            <input className="btn  block w-full  mt-3 mx-auto text-white " type="submit" value="SingUp" />
                        </div>
                    </form>

                    <div>
                        <p className="text-center font-normal font-sans text-xs mt-1  " > ALready have an account? <Link to="/login" className='text-primary ' > Please Login </Link> </p>
                    </div>


                    {/* form end  */}
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google </button>

                    {errorMessage}


                </div>
            </div>

        </section >
    );
};

export default SingUp;