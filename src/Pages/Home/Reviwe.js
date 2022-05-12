import React from 'react';

const Reviwe = ({ data }) => {

    const {
        name,
        reviweText,
        address,
        img, } = data;


    return (
        <div>
            <div className="card lg:max-w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{reviweText}</p>
                    <div className="flex items-center ">

                        <div className="avatar ml-4 mt-9">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="" />
                            </div>
                        </div>

                        <div className='ml-5 mt-8' >
                            <h1>{name}</h1>
                            <h1>{address}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviwe;