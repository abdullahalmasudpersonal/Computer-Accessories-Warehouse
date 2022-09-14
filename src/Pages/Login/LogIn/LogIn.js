import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../Hooks/UseToken';

const Login = () => {
    const emailRef = useRef('');
    const passwrodRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    if (loading || sending) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement =
            <p className='text-danger'>{error?.message} </p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwrodRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='login-bg'>
            <div className='container login'>
                <div className='login-dev '>
                    <div className='login-logo'>
                        <img src={logo} width='80px' alt='' />
                    </div>
                    <h3 className='fw-bold text-center'>Login</h3>

                    <div className='form-dev'>
                        <form onSubmit={handleSubmit}>
                            <input type='email' ref={emailRef} placeholder='Email' name='' required /> <br />
                            <input type='password' ref={passwrodRef} placeholder='Password' name='' required /> <br />
                            <p className='mb-0 forget-btn '><span onClick={resetPassword} >Froget password</span></p>
                            <input className='fw-bold submit' type='submit' name='' value='login' />
                        </form>
                    </div>
                    <p className='text-center'>{errorElement}</p>
                    <div className='or'>
                        <hr className='' /><span>OR</span><hr />
                    </div>
                    <div>
                        <SocialLogin />
                    </div>
                    <p className='text-center new-to-site'>New to WebSite? <Link to='/register' className='please-register-text-color pe-auto text-decoration-none'>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;




























/* 
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container'>
            <h5>Login</h5>

            <div>
                <form onSubmit={handleLogin}>
                    <input ref={emailRef} name='email' type='email' placeholder='email' />
                    <input ref={passwordRef} name='password' type='password' placeholder='password' />
                    <input type='submit' value='login' />
                </form>
            </div>
        </div>
    );
};
*/