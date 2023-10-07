import { Link } from 'react-router-dom';
import LoginWithGoogle from '../../../LoginWithGoogle/LoginWithGoogle';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';




const Register = () => {



const {createUser} = useContext(AuthContext)


const handleSubmit = (e) =>{
    e.preventDefault()
    // get input field 
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const mobile = e.target.mobile.value
    console.log(name, email, password, mobile);

    // validation 
    if(password.length<6){
        toast.error('Please give at least 6 character');
    }
    else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/.test(password)){
        toast.error("please give a valid password..!!!")
    }

    // create a new user    
    createUser(email,password)
    .then(res => {
        console.log(res.user);
        toast.success('Successfully created account  😇 ')
    })
    .catch(err => {
        console.log(err);
    })

    
}

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center my-4 font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name'/>
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile No.</span>
                                </label>
                                <img src="" alt="" />
                                <input type="text" placeholder="Mobile No." className="input input-bordered" name='mobile' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                            <label className="label">
                                Already Have an account? <Link  to="/login" className="text-blue-700 underline">please Login</Link>
                            </label>
                            <LoginWithGoogle></LoginWithGoogle>
                            </form>
                        
                    </div>
                </div>
            
        </>
    );
};

export default Register;

