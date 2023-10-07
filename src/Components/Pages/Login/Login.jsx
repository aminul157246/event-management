
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginWithGoogle from '../../../LoginWithGoogle/LoginWithGoogle';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {


    const location = useLocation()
    console.log(location.pathname);

    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        // get input field 
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(  email, password);



        login(email,password) 
        .then(currentUser => {
            console.log(currentUser.user);
            toast.success('Login successfully')

            navigate(location?.state ? location.state : "/")

            
          })
          .catch((error) => {
            console.log(error.message); 
          });













    
//         // validation 
//         if(password.length<6){
//             toast.error('Please give at least 6 character');
//         }
    
//         // create a new user 
//         signIn(email, password)
//         .then(()=> {
//             toast.success('login successfully')
//             navigate('/')
//         })

// .catch(error => toast.error(error.message))
    
    
        
    }

  
    return (
      <>
      <div className="hero min-h-screen bg-base-200">
          
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl text-center my-4 font-bold">Login now!</h1>
                  <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input type="text" placeholder="email" className="input input-bordered" name='email'/>
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input type="text" placeholder="password" className="input input-bordered" name='password' />
                          <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                          </label>
                      </div>
                      <div className="form-control mt-6 p-0">
                          <button className="btn btn-neutral">Login</button>
                      </div>
                      <label className="label">
                           Do not have an account? <Link to="/register" className="text-blue-700 underline">create an account</Link>
                      </label>
                      <LoginWithGoogle></LoginWithGoogle>
                  </form>
              
          </div>
      </div>
  </>
    );
};

export default Login;