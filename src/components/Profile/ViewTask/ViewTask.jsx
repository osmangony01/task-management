import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { assignTask, findRole, findTeamMember, findTeamTask, submitTask } from '../../../utilities/localDB';
import { AuthContext } from '../../../provider/AuthProvider';
import filterLogo from '../../../../public/filterLogo.svg';
import { RxCross1 } from 'react-icons/rx';

const ViewTask = () => {
    const location = useLocation();
    //console.log(location.state.teamId)

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState(null);
    const [role, setRole] = useState(null);
    const [teamMember, setTeamMember] = useState(null);
    const [updateTask, setUpdateTask] = useState(true);

    const [status, setStatus] = useState(0)
    const [dueDate, setDueDate] = useState(null)

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    const handleDueDate = (e) => {
        setDueDate(e.target.value);
    }
    //console.log(status, dueDate);

    const [filterModal, setFilterModal] = useState(false);
    const handleFilterModal = (isOpen) => {
        //console.log(isOpen)
        setFilterModal(isOpen);
    }

    const [selectedTask, setSelectedTask] = useState('');
    const handleSelectedTask = (event) => {
        setSelectedTask(event.target.value);
    };

    const handleAssignTask = (taskId) => {
       // console.log(taskId, selectedTask);
        assignTask(taskId, selectedTask);
        setUpdateTask(!updateTask);
    }
    const handleSubmitTask = (taskId) => {
        //console.log("submit task : ", taskId);
        submitTask(taskId);
        setUpdateTask(!updateTask);
    }

    const handleFilterResult = () => {

    }

    //console.log(teamMember);

    useEffect(() => {
        setTasks(findTeamTask(location.state.teamId))
        setRole(findRole(user.email));
        setTeamMember(findTeamMember(location.state.teamId))
    }, [location, updateTask])

    return (
        <div className='w-11/12  mx-auto'>
            <div className='w-full flex justify-between py-4'>
                <div className='bg-white py-1 px-3 text-black rounded flex justify-center'>
                    <span className=''>Sort</span>
                </div>
                <div onClick={() => handleFilterModal(true)} className='relative bg-white rounded-lg'>
                    <span className='flex items-center justify-center px-4 py-3   shadow-sm transition cursor-pointer' >
                        <img src={filterLogo} alt="filter-logo" className='h-[15px] w-[15px]' />
                        <span className='text-sm font-semibold text-[#3f3e3e] pl-2' >Filter</span>
                    </span>
                    {
                        // filterModal && <div className="absolute right-0 top-[45px] w-[300px] p-6 rounded-lg text-black z-50 bg-white border border-blue-500 ">
                        //     <span onClick={() => handleFilterModal(false)} className='absolute top-2 right-4 cursor-pointer'><RxCross1 ></RxCross1></span>
                        //     <div className='flex flex-col'>
                        //         <label className=''> Status</label>
                        //         <select name="status" value={status} className='w-full border border-slate-300 px-2 py-1 outline-0 mt-2 rounded' onChange={handleStatusChange}>
                        //             <option value="" disabled>Select an option</option>
                        //             <option value={0} >In progress</option>
                        //             <option value={1}>Pending</option>
                        //             <option value={2}>completed</option>
                        //         </select>
                        //     </div>
                        //     <div className='flex flex-col pt-4'>
                        //         <label className='pb-2'>Due Date</label>
                        //         <input onChange={handleDueDate} type='date' className='px-2 py-1 border w-full' />
                        //     </div>
                        //     <div className='flex justify-end pt-4'>
                        //         <button onClick={handleFilterResult} className=' rounded text-white text-[15px] px-4 py-1 bg-[#525151] hover:bg-black'>{ }Show</button>
                        //     </div>
                        // </div>
                    }
                </div>
            </div>
            <div className="overflow-x-auto pb-2 ">
                <table className='table text-black bg-white rounded-none'>
                    <thead className='text-base font-semibold '>
                        <tr className=' bg-[#6d3899] text-white '>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Due Date</th>
                            <th>Assign Task</th>
                            <th>Progress</th>
                            <th>Mark</th>
                        </tr>
                    </thead>
                    <tbody className='text-[15px'>
                        {
                            tasks && tasks.map((item, index) => {
                                const { description, assignTask, dueDate, mark, priority, progress, taskTitle, taskId } = item;
                                return <tr key={index} className='border-b border-slate-300'>
                                    <td>{taskTitle}</td>
                                    <td>{description}</td>
                                    <td>{priority}</td>
                                    <td>{dueDate}</td>
                                    <td >{assignTask}
                                        {
                                            (role === 'admin' && assignTask == "") ? <span className='flex flex-col gap-2'>
                                                <select name="selectedTask" value={selectedTask} onChange={handleSelectedTask} className='w-[250px] border px-2 py-1 hover:border-slate-500 rounded'>
                                                    <option value="" disabled>Select member</option>
                                                    {
                                                        teamMember && teamMember.map((item, index) => {
                                                            return <option value={item.email} key={index}>
                                                                {item.name}({item.email})
                                                            </option>
                                                        })
                                                    }

                                                </select>
                                                <button onClick={() => handleAssignTask(taskId)} className='bg-[#3477ce] hover:bg-[#4252b1] rounded px-2 py-1 w-[60px] text-white' disabled={selectedTask == "" ? true : false}>Assign</button>
                                            </span> : ''
                                        }
                                    </td>
                                    <td className={`${progress === 1 ? "text-red-500" : ""} ${progress === 2 ? "text-green-500" : ""}`}>
                                        {progress === 0 && "in progress"}
                                        {progress === 1 && "pending"}
                                        {progress === 2 && "completed"}

                                    </td>
                                    <td>
                                        {mark == 0 && "in progress"}
                                        {mark == 1 && <button
                                            onClick={() => handleSubmitTask(taskId)}
                                            disabled={user.email === assignTask ? false : true}
                                            className={`${user.email === assignTask ? "cursor-pointer" : "cursor-not-allowed"} px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700`}>
                                            Submit</button>}
                                        {mark == 2 && "submitted"}
                                    </td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewTask;