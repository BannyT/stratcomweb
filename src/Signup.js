import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth,createUserWithEmailAndPassword,updateProfile } from './firebase'
import './Signup.css'

function Signup() {

      const [email,setEmail]= useState('')
      const [password,setPassword]=useState('')
      const [fullname,setFullName]=useState('')
      const [error,setError]=useState('')
      const [loading,setLoading]=useState(false)


      const navigate =useNavigate()


      // fucntion to create Account

       const createAccount = async ()=>{
               setError('')
               if(password.length < 6){
                  setError('Password Must be atleast 6 characters')
                  return;
               }
               setLoading(true)              
        try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update profile with display name
      await updateProfile(user, { displayName: fullname });

      // Signup successful, redirect to dashboard
      alert('account Created successfully')
      navigate('/');
    } catch (err) {
      console.error('Signup error:', err.message);
      // User-friendly error messages
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered. Please log in.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Use at least 6 characters.');
          break;
        default:
          setError('Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
       }

  return (
    <div className='signuppage'>
        <div className='signupcard'>
          <div className='signupheader'>
              <span className='signupbrand'> <a href='/'> Stratcom Ug </a> </span>
              <h2>Create Account</h2>
              <p>Join us and start your tech journey today</p>
          </div>
          <form className='signupform'>
              <div className='signupformgroup'>
                 <label htmlFor='signupfullname'>Full Name</label>
                 <input 
                  id="signupfullname"
                  placeholder='John'
                  required
                  value={fullname}
                  onChange={((e)=>setFullName(e.target.value))}
                 type="text"/>

              </div>
              <div className='signupformgroup'>
                 <label htmlFor='signupemail'>Email</label>
                 <input 
                  id="signupemail"
                  placeholder='tumusiime@gmail.com'
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                 type="email"/>
              </div>
              <div className='signupformgroup'>
                 <label htmlFor='signuppassword'>Password</label>
                 <input 
                  id="signuppassword"
                  placeholder='********'
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                 type="password"/>

              </div>
              <div className="signupformoptions">
                 <label className='signupterms'>
                    <input type="checkbox" required />
                     i Agree to the terms of service and Privacy policy
                 </label>
              </div>
              <button  onClick={createAccount} className='signupbutton' type='submit'>Create Account</button>
          </form>
          <p className='signupswitch'>
             Already have account? <a href='/login'>Login</a>
          </p>

        </div>
    </div>
  )
}

export default Signup
