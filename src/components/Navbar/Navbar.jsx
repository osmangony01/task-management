import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-4 px-10 bg-purple-500 text-white '>
            <div>Explore</div>
            <div>
                <ul className='flex justify-between items-start'>
                    <li className='px-4'> <ActiveLink to="/">Home</ActiveLink> </li>
                    <li className='px-4'> <ActiveLink to="/contact">Contact</ActiveLink> </li>
                    <li className='px-4'> <ActiveLink to="/profile">Profile</ActiveLink> </li>
                    <li className='px-4'> <ActiveLink to="/sign-in">Sign In</ActiveLink> </li>
                </ul>
            </div>
    </nav>
    );
};

export default Navbar;