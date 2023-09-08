import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { findRole, findTeamMember, findTeamTask } from '../../../utilities/localDB';
import { AuthContext } from '../../../provider/AuthProvider';

const ViewTask = () => {
    const location = useLocation();
    console.log(location.state.teamId)
    
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState(null);
    const [role, setRole] = useState(null);
    const [teamMember, setTeamMember] = useState(null);

    const [selectedTask, setSelectedTask] = useState('');

    const handleSelectedTask = (event) => {
        setSelectedTask(event.target.value);
    };

    const handleAssignTask = (taskId) => {
        console.log(taskId, selectedTask);
    }

    console.log(teamMember);

    useEffect(() => {
        setTasks(findTeamTask(location.state.teamId))
        setRole(findRole(user.email));
        setTeamMember(findTeamMember(location.state.teamId))
    }, [location])

    return (
        <div className='w-11/12 md:w-4/5 mx-auto '>
            <div className="overflow-x-auto py-4">
                <table className='table text-black bg-white rounded-md'>
                    <thead className='text-base font-semibold'>
                        <tr className='border-b border-slate-300'>
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
                                const { description,assignTask, dueDate, mark, priority, progress,  taskTitle, taskId } = item;
                                return <tr key={index} className='border-b border-slate-300'>
                                    <td>{taskTitle}</td>
                                    <td>{description}</td>
                                    <td>{priority}</td>
                                    <td>{dueDate}</td>
                                    <td className='flex flex-col gap-2'>{assignTask}
                                        <select name="selectedTask" value={selectedTask} onChange={handleSelectedTask} className='w-[250px] border px-2 py-1 hover:border-slate-500 rounded'>
                                            <option value="" disabled>Select member</option>
                                            {
                                                teamMember && teamMember.map((item, index) => {
                                                    return <option value={item.email} key={index}>
                                                        {item.name}({item.email})
                                                    </option>
                                                })
                                            }
                                            {/* <option >
                                               name (email)
                                            </option>
                                            <option>3</option>
                                            <option>3</option> */}
                                        </select>
                                        <button onClick={()=>handleAssignTask(taskId)} className='bg-[#3477ce] hover:bg-[#4252b1] rounded px-2 py-1 w-[60px] text-white' disabled={selectedTask == ""? true: false}>Assign</button>
                                    </td>
                                    <td>{progress}</td>
                                    <td>{mark}</td>
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