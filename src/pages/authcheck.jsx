import './signup.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
function Authcheck() {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState({
        Username:"",
        email:"",
        password:""
    });
    const [signin, setSignin] = useState({
        email:"",
        password:""
    });
    const[hide, setHide] = useState(true);
    const navigate = useNavigate();
    const handleSignup = (e)=>{
        e.preventDefault();
    }
    const checkSignup = async()=>{
        try{
            const res = await fetch('https://meri-dukan-backend-2.onrender.com/User/SignUp',{
                method: 'post',
                credentials: 'include',
                headers:{  
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: signup.Username,
                    email: signup.email,
                    password: signup.password 
                })
            })
            const data = await res.json();
            if(res.status === 201){
                alert(data.message);
                setSignup({
                    Username:"",
                    email:"",
                    password:""
                })
                navigate('/');
            }
            if(res.status === 400){
                alert(data.message);
            }
            if(res.status === 409){
                alert(data.message);
                setLogin(true);
            }
        }
        catch(err){
            console.log("Error during Signup", err);
        }
    }
    const handleSignin =(e)=>{
        e.preventDefault();
    }
    const checkSignin = async()=>{
        try{
            const res = await fetch("https://meri-dukan-backend-2.onrender.com/User/login",{
                method:"post",
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: signin.email,
                    password: signin.password
                })
            })
            const data = await res.json();
            if(res.status === 200){
                alert(data.message);
                setSignin({
                    email:"",
                    password:""
                })
                navigate('/');
            }
            if(res.status === 400 || res.status === 401 || res.status === 404){
                alert(data.message);
            }
        }
        catch(err){
            console.log("Error during Signin", err);
        }
    }
  return (
    <>
    <section className='container mx-auto d-flex justify-content-center '>
        <div className='d-flex justify-content-center '>
            <div className=' w-full py-4 d-flex w-100 justify-center items-center'>
                <div className="flex justify-center border gap-4">
                    {!login ? <form action="" onSubmit={handleSignup} key="signup" className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] p-5 user-form rounded'>
                        <h3 className='text-center mb-4 text-gray-800 text-left text-3xl'>Sign Up</h3>
                        <input type="text" name='Username' value={signup.Username} onChange={(e)=> setSignup({...signup, Username:e.target.value})} id="sign-Username" className=' rounded-0 mb-3 text-gray-800 placeholder:text-gray-800' placeholder='Your Name' required />
                        <input type="email" name='email' value={signup.email} onChange={(e) => setSignup({...signup, email:e.target.value})} id="sign-email" className='placeholder:text-gray-800 mb-3 rounded-0' placeholder='Your Email' required />
                        <div className="show-div relative">
                            <input type={hide ? "password" : "text" } name='password' value={signup.password} onChange={(e) => setSignup({...signup, password:e.target.value})} id="sign-password" className='placeholder:text-gray-800 mb-3 rounded-0 ' rows="1" placeholder='Your Password' required />
                            <i  onClick={() => setHide(!hide)} className={`text-gray-800 fa-solid ${hide? "fa-eye-slash": "fa-eye"} absolute top-5 right-2`}></i>
                        </div>    
                        <button type="submit" onClick={checkSignup} className='mt-2 py-1 px-3 rounded bg-[#f87777]'>Sign Up</button>
                        <p className="text-gray-800 text-bold mt-2">* Please Login After Sign Up</p>
                        <br /> <a onClick={()=> setLogin(true)} className='text-gray-800 form-link underline ' htmlFor="#" >Already have an account? Login</a>
                        
                    </form> 
                    :
                    <form action="" key="signin" onSubmit={handleSignin} className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] p-5 user-form rounded'>
                        <h3 className='text-center mb-4 text-gray-800 text-left text-3xl'>Sign In</h3>
                        <input type="email" name='email' value={signin.email} onChange={(e) => setSignin({...signin, email:e.target.value})} id="sign-email" className='placeholder:text-gray-800 mb-3 rounded-0' placeholder='Your Email' required />

                        <div className="show-div relative">
                            <input type={hide ? "password" : "text" } value={signin.password} onChange={(e) => setSignin({...signin, password:e.target.value})} id="sign-password" className='placeholder:text-gray-800 mb-3 rounded-0 ' rows="1" placeholder='Your Password' required />
                            <i style={{right: '10px', top: '30%'}} onClick={() => setHide(!hide)} className={`text-gray-800 fa-solid ${hide? "fa-eye-slash": "fa-eye"} absolute top-5 right-2`}></i>
                        </div>    

                        <button type="submit" onClick={checkSignin} className='mt-2 bg-[#f87777] py-1 px-3 rounded'>Sign In</button> <br />
                        <br /><a onClick={()=> setLogin(false)} className='text-gray-800 form-link underline' htmlFor="#">Don't have an account? Sign Up</a>
                        
                    </form>
                    }
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Authcheck;
