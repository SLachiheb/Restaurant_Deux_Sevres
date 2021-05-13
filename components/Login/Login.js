import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'react-bootstrap';

import classes from './Login.module.css';
import BackgroundWrapper from './../../components/BackgroundWrapper/BackgroundWrapper';
import { useAuth } from './../../contexts/AuthContext';

/*
Type : Function Component.
Return : The user interface for logging in a user who already has an account with a redirect button to the restaurant in case of successful login.
*/

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signupWithGoogle, signupWithGithub } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginHandleSubmit = async e => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
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
      <div className={classes.login_container}>
        <div className={classes.login_card}>
          <div className={classes.login_back} onClick={backHandler}>
            <span>&#8592;</span>
          </div>
          <div className={classes.login_body}>
            <h1>Connexion</h1>

            <div className={classes.login_icons}>
              <div className={classes.temp}>
                <FontAwesomeIcon
                  className={classes.login_google}
                  icon={faGoogle}
                  onClick={googleSignUpHandler}
                />
              </div>
            </div>

            {error && <Alert variant='danger'>{error}</Alert>}

            <form onSubmit={loginHandleSubmit}>
              <div className={classes.login_formGroup}>
                <label>Email</label>
                <input type='email' ref={emailRef} required />
              </div>
              <div className={classes.login_formGroup}>
                <label>Mot de passe</label>
                <input type='password' ref={passwordRef} required />
              </div>
              <button>Se connecter</button>
            </form>
            <div className={classes.login_account}>
              <p>
                Vous ne possédez pas de compte ?{' '}
                <Link href='/signup'>S'inscrire</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Login;

// <>
//   <Card>
//     <Card.Body>
//       <h2 className='text-center mb-4'>Sign Up</h2>
//       {error && <Alert variant='danger'>{error}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group id='email'>
//           <Form.Label>Email</Form.Label>
//           <Form.Control type='email' ref={emailRef} required />
//         </Form.Group>
//         <Form.Group id='password'>
//           <Form.Label>Password</Form.Label>
//           <Form.Control type='password' ref={passwordRef} required />
//         </Form.Group>
//         <Button disabled={loading} className='w-100' type='submit'>
//           Log In
//         </Button>
//       </Form>
//       {/* <div className="w-100 text-center mt-3">
//         <Link to="/forgot-password">Forgot Password?</Link>
//       </div> */}
//     </Card.Body>
//   </Card>
//   <div className='w-100 text-center mt-2'>
//     {/* <p>Already have an account?</p>
//     <Link href='/signup'>Sign In</Link> */}
//   </div>
// </>
