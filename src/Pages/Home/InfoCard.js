import React from 'react';

const InfoCard = ({ details }) => {
    const { title, description, icon, Gradient } = details;
    return (
        <div>
            <div className={`card card-side  text-white shadow-xl lg:px-6 px-4  ${Gradient === true ? 'bg-gradient-to-r from-primary to-secondary' : "bg-accent"} `}>
                <figure><img className='lg:w-auto w-11' src={icon} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;