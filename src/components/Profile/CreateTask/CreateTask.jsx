import React from 'react';
import { addTask, getTask } from '../../../utilities/localDB';
import { useLocation } from 'react-router-dom';

const CreateTask = () => {

    const location = useLocation();

    

    const handleCreateTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const taskTitle = form.taskTitle.value;
        const dueDate = form.dueDate.value;
        const priority = form.priority.value;
        const description = form.description.value;

        const allTask = getTask();
        const id = allTask.length + 1;
        const task = {taskId:id, teamId:location.state.teamId, taskTitle,  dueDate, priority, description, assignTask:"", mark:0, progress:"" };
        console.log(task)
        addTask(task)
        form.reset();
    }

    

    return (
        <div className='w-11/12  sm:w-[450px] mx-auto border border-slate-300 px-10 py-4 hover:shadow-lg rounded-md bg-white '>
            <form onSubmit={handleCreateTask}>
                <h1 className='text-center font-semibold text-2xl pb-4'>Create Task</h1>
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Title</label>
                    <input className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter title' name="taskTitle" />
                </div>
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Due Date</label>
                    <input type='date' className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'  name="dueDate" />
                </div>
                <div className='flex flex-col mt-3'>
                    {/* <label className='pb-1'>Due Date</label>
                    <input type='date'  className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter role ' name="dueDate" /> */}
                    <label className='pb-1'>Priority Level</label>
                    <select name="priority" className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' >
                        <option value="" disabled>Select a priority level</option>
                        <option value="High" >High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Description</label>
                    <textarea className="contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2" rows={3} placeholder="Type description" name="description"></textarea>
                </div>

                <div className='mt-3'> <button type='submit' className='text-right px-4 py-1.5 bg-[#5e3cf7fb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Save</button></div>

            </form>
        </div>
    );
};

export default CreateTask;