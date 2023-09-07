import React from 'react'
import { Outlet } from 'react-router-dom';


// import TopBar from './TopBar';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const ProfileLayout = () => {
    return (
        <div className='flex flex-row bg-slate-200'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='w-full'>
                <Navbar></Navbar>
                <div className="overflow-x-auto max-h-[900px] my-4 mx-6 w-full  py-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;