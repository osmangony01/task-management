import React, { useContext, useEffect, useState } from 'react';
import { addMemberToTeamCollaborate, addTeam, findUser, getTeam, getTeamCollaborationDetails } from '../../../utilities/localDB';

import { AuthContext } from "../../../provider/AuthProvider";

const CreateTeam = () => {

    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState(null);

    const handleCreateTeam = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const role = form.role.value;
        const description = form.description.value;

        const teamInfo = getTeam();
        const id = teamInfo.length + 1;
        const team = { teamId: id, name, role, description };
        addTeam(team);

        const teamD = getTeamCollaborationDetails();
        const id2 = teamD.length + 1;
        const teamDetails = {
            teamDetailsId: id2,
            teamId: id,
            email: newUser[0].email,
            name: newUser[0].name,
            userId: newUser[0].userId,
            status: 1
        }
        //console.log(teamDetails);
        addMemberToTeamCollaborate(teamDetails);
        form.reset();
    }

    useEffect(() => {
        //console.log(user.email)
        const userNew = findUser(user.email);
        //console.log(userNew);
        setNewUser(userNew);

    }, [])

    return (
        <div className='w-11/12  sm:w-[450px] mx-auto border border-slate-300 px-10 py-4 hover:shadow-lg rounded-md bg-white '>
            <form onSubmit={handleCreateTeam}>
                <h1 className='text-center font-semibold text-2xl pb-4'>Create Team</h1>
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Team Name</label>
                    <input className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter team name' name="name" />
                </div>
                <div className='flex flex-col mt-3'>
                    <label className='pb-1'>Team Role</label>
                    <input className='contact-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2' placeholder='Enter role ' name="role" />
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

export default CreateTeam;