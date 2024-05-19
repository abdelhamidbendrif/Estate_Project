import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';
import { signInFailure, signInSuccess } from '../../redux/user/userSlice';
import { toast } from 'react-toastify';

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in result:', result);

      const res = await fetch('http://localhost:8800/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL, // Use photoURL for the avatar
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to authenticate with the server');
      }

      const data = await res.json();
      console.log('Logged in user:', data);

      setIsLoggedIn(true);

      // Update the current user in the Redux store
      dispatch(signInSuccess(data));
      navigate('/');
      toast.success('Google sign-in successful!');
    } catch (error) {
      console.error('Could not sign in with Google:', error);
      dispatch(signInFailure(error.message));
      toast.error('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div>
      {!isLoggedIn && (
        <button onClick={handleGoogleClick} type="button">
          Continue with Google
        </button>
      )}
    </div>
  );
};

export default OAuth;
