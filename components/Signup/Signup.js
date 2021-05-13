import React, { useRef, useState } from 'react';
import { useAuth } from './../../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Alert } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Signup.module.css';
import BackgroundWrapper from './../../components/BackgroundWrapper/BackgroundWrapper';

/*
Type : Function Component.
Return : The user interface for the registration of a user without an account with password verification and with a redirection button to the restaurant in case of successful login.
*/

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, signup, signupWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const FormHandleSubmit = async e => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Les mots de passe ne correspondent pas');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      router.push('/restaurants');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const googleSignUpHandler = async e => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signupWithGoogle();
      router.push('/restaurants');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const backHandler = () => {
    router.push('/');
  };

  return (
    <BackgroundWrapper>
      <div className={classes.signup_container}>
        <div className={classes.signup_card}>
          <div className={classes.signup_back} onClick={backHandler}>
            <FontAwesomeIcon
              className={classes.icon_arrow}
              icon={faArrowLeft}
            />
          </div>
          <div className={classes.signup_body}>
            <h1>Inscription</h1>

            {error && <Alert variant='danger'>{error}</Alert>}

            <form onSubmit={FormHandleSubmit}>
              <div className={classes.signup_formGroup}>
                <label>Email</label>
                <input type='email' ref={emailRef} required />
              </div>
              <div className={classes.signup_formGroup}>
                <label>Mot de passe</label>
                <input type='password' ref={passwordRef} required />
              </div>
              <div className={classes.signup_formGroup}>
                <label>Confirmer mot de passe</label>
                <input type='password' ref={passwordConfirmRef} required />
              </div>
              <button>S'inscrire</button>
            </form>
            <div className={classes.signup_account}>
              <p>
                Vous possédez déjà un compte ?{' '}
                <Link href='/login'>Connexion</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Signup;
