import React from 'react'
import { Outlet } from 'react-router-dom';


import TopBar from './TopBar';
import Sidebar from './SIdebar';

const ProfileLayout = () => {
    return (
        <div className='flex flex-row gap-4 bg-gray-100'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='w-full'>
                <TopBar></TopBar>
                <div className="overflow-x-auto mt-5 w-full rounded-md bg-white p-6">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default ProfileLayout;