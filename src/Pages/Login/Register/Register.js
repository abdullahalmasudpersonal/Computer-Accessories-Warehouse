import React/* , { useState } */ from 'react';
/* import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'; */
import { Link/* , useNavigate  */} from 'react-router-dom';
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {

    return (
        <div className='register-bg'>
            <div className='container register'>
                <div className='register-dev'>
                    <div className='register-logo'>
                        <img src={logo} width='80px' alt='' />
                    </div>
                    <h3 className='fw-bold text-center'>Register</h3>

                    <div className='form-dev'>
                        <form>
                            <input type='' placeholder='Name' name='' /> <br />
                            <input type='' placeholder='Email' name='' /> <br />
                            <input type='' placeholder='Password' name='' /> <br />
                            {/* <input type='checkbox' name='terms' id='terms' />
                            <label  style={{color:'rgb(252, 240, 232)'}}className='ms-1 fw-bold' htmlFor='terms'> Accept Terms and Conditions </label> 
                            <br /> */}
                            <input className='fw-bold submit-btn' type='submit' name='' value='Register' />
                        </form>
                    </div>
                    <div className='or-ben'>
                        <hr className='' /><span>OR</span><hr />
                    </div>
                    <div>
                        <SocialLogin/>
                    </div>
                    <p className='text-center alrady-have-account'>Alrady have an account?<Link to='/login' className='please-login-text-color pe-auto text-decoration-none'> Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

