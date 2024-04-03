//rafce
import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userSlice';
import { NETFLIX_LOGO, PROFILE_LOGO, SIGNUP, SIGNIN } from '../utils/constant';
const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, SetisSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    let message = checkValidateData(email.current.value, password.current.value);
    SetErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_LOGO
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }))
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
  }

  const toggleSignInForm = () => {
    SetisSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src={NETFLIX_LOGO}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            ref={name}
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
          {isSignInForm ? SIGNUP : SIGNIN}</p>
      </form>
    </div>
  )
}

export default Login