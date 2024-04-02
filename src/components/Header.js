import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    //this function will be called on every change of username and password
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //this is unscribe the listener when component unmounts
    return () => unsubscribe();
  }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
        user && (
          <div className='flex p-2'>
            <img
              className='w-12 h-12'
              alt="profileicon"
              src={user.photoURL}
            />
            <button
              className='font-bold text-white'
              onClick={handleSignOut}>( Sign out )</button>

          </div>
        )
      }


    </div>
  )
}

export default Header