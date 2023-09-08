import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { findATeamMember, findTeamMember } from '../../../utilities/localDB';

const ViewMember = () => {
    const location = useLocation();
    const [teamMember, setTeamMember] = useState(null);
    //console.log(location.state.teamId)
    //console.log('team :',teamMember);

    useEffect(() => {
        setTeamMember(findATeamMember(location.state.teamId));
    }, [])

    return (
        <div className='w-11/12  mx-auto'>
            <div className="overflow-x-auto pb-2 ">
                <table className='table text-black bg-white rounded-none'>
                    <thead className='text-base font-semibold '>
                        <tr className=' bg-[#6d3899] text-white '>
                          
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className='text-[15px'>
                        {
                            teamMember && teamMember.map((item, index) => {

                                return <tr key={index} className='border-b border-slate-300'>
                                   
                                    <td> <img className='rounded-lg border w-[50px] h-[50px]' src={item.photo_url} alt="" /></td>
                                    <td>{ item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{ item.role}</td>
                                   
                                </tr>
                            })
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewMember;