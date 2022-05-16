import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';


const LoginByEmail = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, userG, loading_G, error_G] = useSignInWithGoogle(auth);


    let errorMessage;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        userEmail,
        loading_Email,
        error_Email,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(userG || userEmail);

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [user, userG, userEmail, token, from, navigate])

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }


    if (loading_Email || loading_G) {
        return <Loading />
    }

    if (error_Email || error_G) {
        errorMessage = <p className='text-red-500 text-xs' > {error_Email?.message || error_G?.message} </p>
    }

    // if (userG || userEmail) {
    //     console.log(userG?.user?.displayName || userEmail?.user?.displayName);
    // }

    return (
        <section className='flex flex-col justify-center items-center h-screen pb-16'>

            <div className=" w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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



                        <p>forget password ?</p>

                        {error_Email && errorMessage}


                        <div className='flex justify-center' >
                            <input className="btn  block w-full  mt-3 mx-auto text-white " type="submit" value="login" />
                        </div>
                    </form>

                    <div>
                        <p className="text-center font-normal font-sans text-xs mt-1  " > New to Doctor Portal ? <Link to="/signup" className='text-primary ' > Create New Account </Link> </p>
                    </div>


                    {/* form end  */}
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google </button>

                    {error_G && errorMessage}


                </div>
            </div>

        </section >
    );
};

export default LoginByEmail;