//rafce
import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, SetisSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //console.log("><", email.current.value);
    let message = checkValidateData(email.current.value, password.current.value);
    SetErrorMessage(message);
  }

  const toggleSignInForm = () => {
    SetisSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        }
        <input
          ref={email}
          type="text"
          placeholder="Email/Phone number"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer'
          onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already a user? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login