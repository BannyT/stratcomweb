import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signuppage'>
        <div className='signupcard'>
          <div className='signupheader'>
              <span className='signupbrand'> Stratcom Ug</span>
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
                 type="text"/>

              </div>
              <div className='signupformgroup'>
                 <label htmlFor='signupemail'>Email</label>
                 <input 
                  id="signupemail"
                  placeholder='tumusiime@gmail.com'
                  required
                 type="email"/>
              </div>
              <div className='signupformgroup'>
                 <label htmlFor='signuppassword'>Password</label>
                 <input 
                  id="signuppassword"
                  placeholder='********'
                  required
                 type="password"/>

              </div>
              <div className="signupformoptions">
                 <label className='signupterms'>
                    <input type="checkbox" required />
                     i Agree to the terms of service and Privacy policy
                 </label>
              </div>
              <button className='signupbutton' type='submit'>Create Account</button>
          </form>
          <p className='signupswitch'>
             Already have account? <a href='/login'>Login</a>
          </p>

        </div>
    </div>
  )
}

export default Signup
