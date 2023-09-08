import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { findTeamTask } from '../../../utilities/localDB';

const ViewTask = () => {

    const location = useLocation();
    console.log(location.state.teamId)

    const [tasks, setTasks] = useState(null);


    useEffect(() => {
        setTasks(findTeamTask(location.state.teamId))
    }, [])

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
                                return <tr key={index} className='border-b border-slate-300'>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
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