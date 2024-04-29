import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { creatNewUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handelRegisterBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password, photo);
        const user = { name, email, photo }
        console.log(user);
        setError('')
        if (password.length < 6) {
            return setError('Password minimum 6 charecter')
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            return setError('Provide a strong password')
        }
        creatNewUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name, photoURL: photo
                })
                fetch('https://assignment-10-server-side-ashen.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                Swal.fire({
                    title: "Register!",
                    text: "You have successfully register!",
                    icon: "success"
                });
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }

    const [showPass, setShowPass] = useState(false)
    const handelShowPassword = () => {
        setShowPass(!showPass)
        console.log(showPass);
    }
    return (
        <div className="max-sm:mx-3 md:mx-5 mt-5">
            <div className="hero min-h-screen bg-[#328EFF26] max-w-[1170px]  lg:mx-auto font-raleway rounded-lg">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 md:w-[600px] w-[360px] mt-5 shadow-xl bg-base-100">
                        <form className="card-body" onSubmit={handelRegisterBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="Password" className="input input-bordered" required />
                                <span className="absolute text-xl top-[60px] right-4" onClick={handelShowPassword}>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                            </div>
                            <p className="text-[red]">{error}</p>
                            <div className="form-control mt-6">
                                <input type="submit" value='Register' className="btn bg-violet-600 text-white text-xl font-semibold"></input>
                            </div>
                            <p className="font-medium">Already have an account? <Link to='/login' className="text-violet-600 hover:underline">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;