import React, { createContext, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';


// import TopBar from './TopBar';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';




const ProfileLayout = () => {



    return (

        <div className='flex flex-row bg-slate-200 '>
            <div className=''>
                <Sidebar></Sidebar>
            </div>
            <div className='w-full'>
                <Navbar></Navbar>
                <div className=" max-w-full max-h-[900px] my-4  py-6 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default ProfileLayout;