import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import useToken from '../../../Hooks/UseToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //  const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('updated profile');

    }

    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    }
     if (token) {
         navigate('/');
     }


    return (
        <div className='register-bg'>
            <div className='container register'>
                <div className='register-dev'>
                    <div className='register-logo'>
                        <img src={logo} width='80px' alt='' />
                    </div>
                    <h3 className='fw-bold text-center'>Register</h3>

                    <div className='form-dev'>
                        <form onSubmit={handleRegister}>
                            <input type='' placeholder='Name' name='name' /> <br />
                            <input type='' placeholder='Email' name='email' /> <br />
                            <input type='password' placeholder='Password' name='password' /> <br />

                            <input onClick={() => setAgree(!agree)} type='checkbox' name='terms' id='terms' />
                            <label style={{ color: '' }} className={`fw-bold ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor='terms'> Accept Terms and Conditions </label>

                            <br />
                            <input disabled={!agree} className='fw-bold submit-btn' type='submit' name='' value='Register' />
                        </form>
                    </div>
                    <div className='or-ben'>
                        <hr className='' /><span>OR</span><hr />
                    </div>
                    <div>
                        <SocialLogin />
                    </div>
                    <p className='text-center alrady-have-account'>Alrady have an account?<Link to='/login' className='please-login-text-color pe-auto text-decoration-none'> Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

