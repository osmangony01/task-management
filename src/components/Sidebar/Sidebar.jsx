import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaUsers } from 'react-icons/fa';
import { FiUserPlus } from "react-icons/fi";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { findAllTeam, findRole, findUser, getTeam } from '../../utilities/localDB';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import TeamAccordion from './TeamAccordion';
import { AuthContext } from '../../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';


const Sidebar = () => {

    const { user, data } = useContext(AuthContext);
    //const [teamResult, setTeamResult] = useContext(ContextAPI)

    //const { newUser } = useContext(AuthContext);
    //console.log(newUser);
    const [newUser, setNewUser] = useState(null);
    const [role, setRole] = useState(null);

    //const getAllTeam = getTeam();
    const [teams, setTeams] = useState(null);

    const [show, setShow] = useState(false)

    const [showBar, setShowBar] = useState(false);
    const handleShow = () => {
        show(true)
    }

    useEffect(() => {
        if (user?.email) {
            setRole(findRole(user?.email));
            const userNew = findUser(user?.email);
            //console.log(userNew);
            setNewUser(userNew);
            const teamData = findAllTeam(user?.email);
            //console.log(teamData)
            setTeams(teamData);
        }
    
    }, [data, user])


    return (
        <div>
            <div className="w-[50px] h-screen  text-slate-300 bg-[#3e3c61] p-5  md:hidden">
                <span className='cursor-pointer' onClick={() => setShowBar(!showBar)}>  <FaBars></FaBars></span>
            </div>
            <aside className={`${showBar ? "absolute top-0 left-0" : " hidden"} w-[250px] h-screen  text-slate-300 bg-[#3e3c61]  md:flex md:flex-col z-50`}>
                <div className="flex flex-col  text-lg">
                    <div className="py-5 px-2 w-full bg-[#2f2d52] text-xl flex justify-between items-center font-semibold">
                        <span>
                            <Link href="/contact-list">Task Management</Link>
                        </span>
                        <span className='md:hidden cursor-pointer' onClick={() => setShowBar(!showBar)}><RxCross1 color='white'></RxCross1></span>
                    </div>

                    <div className="p-2 text-[15px]">
                        <ul>
                            {
                                role && role === "admin" && <li className='flex justify-between items-center my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>
                                    <span>Create Team</span> <Link to="/profile/create-team">
                                        <span className='cursor-pointer'> <HiOutlinePlusSmall size={20}></HiOutlinePlusSmall></span></Link>
                                </li>
                            }
                            <Link to="/profile/users">
                                <li className='flex justify-between items-center my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>
                                    <span>Users</span> <FaUsers></FaUsers>
                                </li>
                            </Link>
                            
                            {
                               role &&  role === "admin" && <li className='my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438]'>All Team</li>

                            }
                            {role === "admin" && <hr />}

                            {
                                teams && teams.map((item, index) => {
                                    return <TeamAccordion key={index} teamId={item.teamId} teamName={item.name}></TeamAccordion>
                                })
                            }

                        </ul>
                    </div>
                </div>

            </aside>
        </div>
    );
};

export default Sidebar;