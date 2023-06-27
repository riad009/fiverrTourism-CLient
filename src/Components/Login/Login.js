import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Auth/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import Lottie from "lottie-react"
import find from '../../assets/login-4.json'
import { FcGoogle } from 'react-icons/fc';
import firebase from 'firebase/app';
import 'firebase/auth';
import img from '../../assets/wallet/wallet.PNG'
import 'react-toastify/dist/ReactToastify.css';






const Login = () => {

  

  const [loading,setloading]=useState(false)
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
  const {login}=useContext(AuthContext)
  const {reset}=useContext(AuthContext)
  
//
const handlereset=event=>{
  event.preventDefault();
  const email= event.target.email.value;
  reset(email)
 
}
//
  const navigate=useNavigate()


  const handleRegister=event=>{
    event.preventDefault();

    setTimeout(()=>{
      setloading(true);
   
     
     },2)
    const email= event.target.email.value;
    const name= event.target.name.value;
    const password= event.target.password.value;
    

    login(email,password)
    
    
    .then(result=>{
  
      setloading(true);
      toast.success('Login Done', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     
      
        navigate('/')
      
      const user=result.user
    })
    
    setTimeout(()=>{
      setloading(false);
     
     
     },20000)

     }

     const {providerLogin} =useContext(AuthContext)
     const handleGoogleSignIn=()=>{
      const googleProvider= new GoogleAuthProvider()
      providerLogin(googleProvider)
      .then(result=>{
  
        const user= result.user;
      
        
        toast.success('Registration Done', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      
          navigate('/')
       
      })
      .catch(error=>console.error(error))
      
    }
    return (
      <div>

      <div className="hero min-h-screen ">
    
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">

  
<div className='justify-self-center w-96'><Lottie animationData={find}/></div>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleRegister} className="card-body">
<div className="form-control">
    </div>
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="text" placeholder="email" name='email' className="input input-bordered" />
  </div>
  {/* // */}
  
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" placeholder="password" name='password' className="input input-bordered" />
    
    <label className="label">
      <a href="#" className="label-text-alt link link-hover"> <Link to='/Registration'>Dont have account? <p className='bg-gray-400 text-white '>Registration</p></Link></a>
   
    </label>
    
  </div>
  {loading ? (<button disabled type="button" class="mt-4 py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    Loading...
</button>)  :'' } 
  <div className="form-control mt-6">
    <button className="btn btn-success text-white">Login</button>
    <label className="label">
      <button onClick={handlereset} className='text-red-400 font-semibold'>Forget password? </button>
    </label>
     </div>
</form>
<button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-3 m-4  mt-3"> <p className='text-2xl mr-1'><FcGoogle/></p>Google Sign in</button>

</div>
</div>
</div>
<ToastContainer />
  </div>
    );
};

export default Login;