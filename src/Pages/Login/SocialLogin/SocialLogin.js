import React from 'react';
import auth from '../../../firebase.init';
import Google from '../../../img/SocialLogin/google-logo3.png';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if(loading){
        return <Loading/>
    }

    if (error ) {
        errorElement =
            <p className='text-danger'>{error?.message} {error?.message}</p>
    }

    if (user) {
        navigate('/');
    }

    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}
                style={{ width: '240px', border: 'none', color:'rgb(71, 59, 59)' }} className='btn fw-bold mx-auto d-block my-3 continue-with-google'>
                <img  style={{ width: '28px' }} src={Google} alt='' />
                <span className='px-1'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;