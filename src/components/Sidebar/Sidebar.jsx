import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaUsers } from 'react-icons/fa';
import { FiUserPlus } from "react-icons/fi";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { getTeam } from '../../utilities/localDB';


const Sidebar = () => {

    const getAllTeam = getTeam();
    const [teams, setTeams] = useState(getAllTeam);

    return (
        <div>
            <aside className="w-[250px] h-screen  text-slate-300 bg-[#3e3c61] hidden lg:flex lg:flex-col ">
                <div className="flex flex-col  text-lg">
                    <div className="py-5 px-2 bg-[#2f2d52] text-xl text-center font-semibold"><Link href="/contact-list">Task Management</Link></div>
                
                    <div className="p-2 text-[15px]">
                        <ul>
                            <li className='flex justify-between items-center my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>
                                <span>Create Team</span> <Link to="/profile/create-team">
                                <span className='cursor-pointer'> <HiOutlinePlusSmall size={20}></HiOutlinePlusSmall></span></Link>
                            </li>
                            <li className='flex justify-between items-center my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>
                                <span>Users</span> <FaUsers></FaUsers>
                            </li>

                            <li className='flex justify-between items-center my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>
                                <span>Create Task</span>
                                <Link to="/profile/create-task">
                                <span title='create' className='cursor-pointer'> <HiOutlinePlusSmall size={20}></HiOutlinePlusSmall></span></Link>
                            </li>

                            {/* <hr /> */}
                            <li className='my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>All Team</li>
                            <hr />
                            {/* <li><span><FiUserPlus size={18}></FiUserPlus></span></li> */}

                        
                        </ul>
                    </div>
                </div>

            </aside>
        </div>
    );
};

export default Sidebar;