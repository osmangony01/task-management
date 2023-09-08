import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from "../ActiveLink/ActiveLink";
import { findUser } from "../../utilities/localDB";


const Navbar = () => {

    const { user,nav, logOut } = useContext(AuthContext);
    const [userControl, setUserControl] = useState(false);
   
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/", { replace: true });
            })
            .catch(error => console.log(error.message))
    }

    console.log(user)
    // useEffect(() => {
       
    // },[user])
    const u = findUser(user?.email);

    const navItems = <>

        {/* {!user && <li className='px-4'> <ActiveLink to="/">SIGN IN</ActiveLink> </li>} */}
        {user && <li onClick={handleLogOut} className="hover:text-white text-sm  cursor-pointer pr-2" ><a>SIGN OUT</a></li>}
    </>

    return (
        <div className="relative">


            <div className="navbar bg-[#3e3c61] text-slate-200  md:px-10 py-2  scroll-py-2">
                <div className="navbar-start">
                    <div className="flex items-center">
                        <a className="btn btn-ghost normal-case text-lg">Hi, { u?.name}</a>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        <div className="hidden lg:flex">
                            <ul className=" menu-horizontal px-1   text-sm">
                                {navItems}
                            </ul>
                        </div>
                    }
                    {
                        user && <div className="relative" onClick={() => setUserControl(!userControl)}>
                            <label className="btn btn-ghost btn-circle avatar m-0">
                                <div className="w-10 rounded-full">
                                    {user.photoURL ? <img src={user.photoURL} alt="" className='bg-slate-200' title={user.displayName} />
                                        : <span className='first-line:' title={user.displayName}><FaUserCircle size={40}></FaUserCircle></span>}
                                </div>
                            </label>
                            {
                                userControl && <div className="absolute right-0 top-10 z-10 text-black">
                                    <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 border border-purple-400 rounded-md w-52">
                                        <li><span>{user.email}</span></li>
                                        <li className=''> <ActiveLink to="/">Sign Out</ActiveLink></li>
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

