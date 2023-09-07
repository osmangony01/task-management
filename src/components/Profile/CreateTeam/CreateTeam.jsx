import React from 'react';
import { addTeam } from '../../../utilities/localDB';


const CreateTeam = () => {

    const handleCreateTeam = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const role = form.role.value;
        const description = form.description.value;
        const team = { name, role, description };
        addTeam(team);
        form.reset();
    }

    return (
        <div className='w-11/12  sm:w-[450px] mx-auto border border-slate-300 px-10 py-4 hover:shadow-lg rounded-md bg-white '>
            <form onSubmit={handleCreateTeam}>
                <h1 className='text-center font-semibold text-2xl pb-4'>Create Team</h1>
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Team Name</label>
                    <input  className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter team name' name="name" />
                </div>
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Team Role</label>
                    <input  className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter role ' name="role" />
                </div>
                
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Description</label>
                    <textarea  className="contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2" rows={3} placeholder="Type description" name="description"></textarea>
                </div>
                
                <div className='mt-3'> <button type='submit' className='text-right px-4 py-1.5 bg-[#5e3cf7fb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Save</button></div>

            </form>
        </div>
    );
};

export default CreateTeam;