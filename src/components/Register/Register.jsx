import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { addUser } from "../../utilities/localDB";




const Register = () => {

    const [passError, setPassError] = useState("");
    const { createUser, setLoading, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();




    const handleSubmit = (e) => {
        //console.log(data);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;
        const addBio = form.bio.value;
        const username = form.username.value;
        const userInfo = { name, email, photo_url, addBio, username };
        //console.log(userInfo);
        // addUser(userInfo);

        setPassError("");
        if (password.length < 6) {
            setPassError("At least 6 characters needed!!");
            return;
        }

        //console.log('ok')
        createUser(email, password)
            .then(result => {
                const CreateUser = result.user;
                //console.log(CreateUser);
                
                updateUserData(result.user, name, photo_url)
                    .then(() => {
                        
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                
                addUser(userInfo);
                setLoading(false);
                form.reset();
                navigate("/profile", { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    //console.log(watch("example"));
    return (
        <div className='bg-slate-200  pt-8 pb-16'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-8 px-12 max-sm:px-4 shadow rounded'>
                <h3 className='text-center text-3xl font-semibold'>Sign Up</h3>
                <hr className='my-6' />
                <form action="" className='px-4' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Full Name</label>
                        <input type="text" name="name" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your name' />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block mb-1.5'>Email</label>
                        <input type="email" name="email" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your email' />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Password</label>
                        <input type="password" name="password" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your password' />
                        <small>{passError}</small>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5' >Username</label>
                        <input type="text" name="username" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter username' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5' >Photo URL</label>
                        <input type="text" name="photo_url" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter photo url' />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5' >Add Bio</label>
                        <textarea type="text" name="bio" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Add bio'></textarea>
                    </div>

                    <button className='w-full py-2 mt-5 bg-white border border-purple-400 hover:bg-purple-800 text-base text-black hover:text-white rounded' >Sign Up</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/" className='text-blue-700 font-semibold'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;