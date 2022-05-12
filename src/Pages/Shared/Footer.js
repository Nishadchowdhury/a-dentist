import React from 'react';

const Footer = () => {
    return (
        <div className=" lg:bg-[url('/src/assets/images/bg.png')]  " >
            <footer className="footer p-10 h-[405]  text-neutral-content">
                <div>
                    <span className="footer-title text-black ">Services</span>
                    <span className="link link-hover text-black ">Branding</span>
                    <span className="link link-hover text-black ">Design</span>
                    <span className="link link-hover text-black ">Marketing</span>
                    <span className="link link-hover text-black ">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title text-black">Company</span>
                    <span className="link link-hover text-black">About us</span>
                    <span className="link link-hover text-black">Contact</span>
                    <span className="link link-hover text-black">Jobs</span>
                    <span className="link link-hover text-black">Press kit</span>
                </div>
                <div>
                    <span className="footer-title text-black">Legal</span>
                    <span className="link link-hover text-black">Terms of use</span>
                    <span className="link link-hover text-black">Privacy policy</span>
                    <span className="link link-hover text-black">Cookie policy</span>
                </div>
            </footer>

            <div className="footer footer-center p-4 mb-6  text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;