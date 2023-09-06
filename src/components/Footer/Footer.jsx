
import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="w-full sm:flex sm:items-center sm:justify-between bg-black text-white px-20 py-4">
                <div># 2023 Explore</div>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

                    <span><Link to=""><BsFacebook></BsFacebook></Link></span>
                    <span><Link to=""><BsInstagram></BsInstagram></Link></span>
                    <span><Link to=""><BsTwitter></BsTwitter></Link></span>
                    <span><Link to=""><BsGithub></BsGithub></Link></span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;