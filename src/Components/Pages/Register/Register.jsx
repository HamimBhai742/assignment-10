import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#328EFF26] max-w-[1170px] mx-auto font-raleway rounded-lg">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-[600px] mt-5 shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-violet-600 text-white text-xl font-semibold">Register</button>
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