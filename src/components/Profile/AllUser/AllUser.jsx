
import React, { useEffect, useState } from 'react';
import { getUser } from '../../../utilities/localDB';

const AllUser = () => {

    const [users, setUsers] = useState(null);

    //console.log('all user ', users)

    useEffect(() => {
        const users = getUser();
        setUsers(users);
        
    }, [])
    return (
        <div className='w-11/12  mx-auto'>
            <div className="overflow-x-auto pb-2 ">
                <table className='table text-black bg-white rounded-none'>
                    <thead className='text-base font-semibold '>
                        <tr className=' bg-[#6d3899] text-white '>
                          <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className='text-[15px'>
                        {
                            users && users.map((item, index) => {

                                return <tr key={index} className='border-b border-slate-300'>
                                    <td>{ index+1}</td>
                                    <td> <img className='rounded-lg border w-[60px] h-[60px]' src={item.photo_url} alt="" /></td>
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

export default AllUser;