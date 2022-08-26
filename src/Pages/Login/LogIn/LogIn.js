import React/* , { useRef } */ from 'react';
/* import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'; */
import { Link/* , useLocation, useNavigate */ } from 'react-router-dom';
/* import auth from '../../../firebase.init'; */
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {

    return (
        <div className='login-bg'>
            <div className='container login'>
                <div className='login-dev '>
                    <div className='login-logo'>
                        <img src={logo} width='80px' alt='' />
                    </div>
                    <h3 className='fw-bold text-center'>Login</h3>

                    <div className='form-dev'>
                        <form>
                            <input type='' placeholder='Email' name='' /> <br />
                            <input type='' placeholder='Password' name='' /> <br />
                            <p className='mb-0 forget-btn '><span>Froget password</span></p>
                            <input className='fw-bold submit' type='submit' name='' value='login' />
                        </form>
                    </div>
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