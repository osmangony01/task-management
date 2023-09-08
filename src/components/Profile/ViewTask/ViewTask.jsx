import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { assignTask, findRole, findTeamMember, findTeamTask, submitTask } from '../../../utilities/localDB';
import { AuthContext } from '../../../provider/AuthProvider';

const ViewTask = () => {
    const location = useLocation();
    console.log(location.state.teamId)

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState(null);
    const [role, setRole] = useState(null);
    const [teamMember, setTeamMember] = useState(null);
    const [updateTask, setUpdateTask] = useState(true);

    const [selectedTask, setSelectedTask] = useState('');

    const handleSelectedTask = (event) => {
        setSelectedTask(event.target.value);
    };

    const handleAssignTask = (taskId) => {
        console.log(taskId, selectedTask);
        assignTask(taskId, selectedTask);
        setUpdateTask(!updateTask);
    }
    const handleSubmitTask = (taskId) => {
        console.log("submit task : ", taskId);
        submitTask(taskId);
        setUpdateTask(!updateTask);
    }

    console.log(teamMember);

    useEffect(() => {
        setTasks(findTeamTask(location.state.teamId))
        setRole(findRole(user.email));
        setTeamMember(findTeamMember(location.state.teamId))
    }, [location, updateTask] )

    return (
        <div className='w-11/12 md:w-4/5 mx-auto '>
            <div className="overflow-x-auto py-4 ">
                <table className='table text-black bg-white rounded-none'>
                    <thead className='text-base font-semibold '>
                        <tr className=' bg-[#6d3899] text-white '>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Due Date</th>
                            <th>Assign Task</th>
                            <th>Progress</th>
                            <th>Marks</th>
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
                                    <td className={`${progress == 'pending' ? "text-red-500":"" } ${progress == 'completed' ? "text-green-500": ""}`}>{progress }</td>
                                    <td>
                                        {mark == 0 && "N/A"} 
                                        {mark == 1 && <button
                                            onClick={() => handleSubmitTask(taskId)}
                                            disabled={ user.email === assignTask ? false: true}
                                            className={`${user.email === assignTask ?"cursor-pointer":"cursor-not-allowed"} px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700`}>
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