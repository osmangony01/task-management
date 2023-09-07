
import React, { useContext, useEffect, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { HiOutlinePlusSmall } from 'react-icons/hi2';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { RiCodeView } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { addMemberToTeamCollaborate, findRole, findUser, getTeamCollaborationDetails, getUser } from '../../utilities/localDB';
import { AuthContext } from '../../provider/AuthProvider';

const TeamAccordion = ({ teamId, teamName }) => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
    // const { newUser } = useContext(AuthContext);

    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState(null);
    const [role, setRole] = useState(null);

    //console.log(newUser[0])
    
    //console.log(role);

    
    const [allUser, setAllUser] = useState(null);

    const handleModal = () => {
        setModal(false);
    }

    const showModal = () => {
        setModal(true);
    }

    console.log(teamId);
    console.log(allUser)
    const handleInvite = (userId, name, email) => {

        // console.log(newUser[0].name)
        // console.log(newUser[0].email)
        //const { name, email } = newUser[0];
        const teamD = getTeamCollaborationDetails();
        const id = teamD.length + 1;
        const details = {teamDetailsId: id, userId, teamId, name, email, status: 1 };
        console.log(details);
        addMemberToTeamCollaborate(details);
    }

    useEffect(() => {
        setRole(findRole(user.email));
        const userNew = findUser(user.email);
        //console.log(userNew);
        setNewUser(userNew);
        const users = getUser();
        setAllUser(users)

    }, [])

    return (
        <div className='pt-2'>
            <div className={`flex justify-between items-center my-1 rounded px-3 py-1 hover:text-white hover:bg-[#221438] ${show ? 'bg-[#221438]' : ''}`}>
                <span >{teamName}</span>
                <span className='flex'>
                    {!show && <span onClick={() => setShow(!show)} className=''><MdKeyboardArrowRight size={22}></MdKeyboardArrowRight></span>}
                    {show && <span onClick={() => setShow(!show)}><MdKeyboardArrowDown size={22}></MdKeyboardArrowDown></span>}
                </span>
            </div>
            {show && <div>
                <ul className='text-sm'>
                    {
                       role === "admin" && <li className='flex justify-between items-center pl-4 my-1 rounded px-3 py-2 hover:text-white hover:bg-[#221438]'>
                            <span>- Invite</span>
                            <span onClick={showModal} className='cursor-pointer'> <FiUserPlus size={18}></FiUserPlus></span>
                        </li>
                    }
                    {
                        role === 'admin' && <li className='flex justify-between items-center pl-4 my-1 rounded px-3 py-2 hover:hover:bg-[#221438]'>
                        <span>- Create Task </span>
                        <span className='cursor-pointer'> <HiOutlinePlusSmall size={20}></HiOutlinePlusSmall></span>
                    </li>
                    }
                    <li className='flex justify-between items-center pl-4 my-1 rounded px-3 py-2 hover:text-white hover:bg-[#221438]'>
                        <span>- View Task</span>
                        <span className='cursor-pointer'><RiCodeView size={18}></RiCodeView></span>
                    </li>
                </ul>
            </div>}
            {
                modal && <div>
                    <div className='h-screen w-full fixed top-10 left-0 flex justify-center items-center bg-black bg-opacity-20 '>
                        <div className='relative bg-[#221438] rounded  shadow-lg w-[450px] text-white  text-[15px] mx-auto h-[350px] z-100'>
                            <div className='border-b border-slate-500 px-4 py-2 sticky top-0 font-semibold flex justify-between'>
                                <span className='flex flex-col '>
                                    <span>Invite team member</span>
                                    <span>Team1</span>
                                </span>
                                <span onClick={handleModal} className='absolute top-[20px] right-[30px] hover:bg-slate-500 p-2 rounded-full'><RxCross1 color='white'></RxCross1></span>
                            </div>

                            <main className='flex-grow overflow-y-scroll  px-6 py-3 max-h-[210px]'>
                                {
                                    allUser && allUser.map((item, index) => {
                                        const { userId, name, email, photo_url } = item;
                                        return <div key={index} className='flex justify-between items-center py-1.5 text-sm border-b border-slate-500'>
                                            <span><img className='w-[40px] h-[40px] border rounded-full' src={photo_url} alt='img' /></span>
                                            <span className='flex flex-col'>
                                                <span className=''>{name}</span>
                                                <span>{email}</span>
                                            </span>
                                            <span><button onClick={() => handleInvite(userId, name, email)} className='px-2 py-0.5 border border-green-500 rounded hover:bg-green-500 hover:text-white'>Invite</button></span>
                                        </div>
                                    })
                                }
                            </main>
                            <div className='py-3 border-t border-slate-500 absolute  left-0 right-0 bottom-0 px-6 overflow-hidden z-50'>
                                <button onClick={handleModal} className='flex justify-end px-4 py-1  rounded hover:border hover:borer-slate-500 text-white text-base font-semibold hover:bg-black'>
                                    <span>Close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TeamAccordion;