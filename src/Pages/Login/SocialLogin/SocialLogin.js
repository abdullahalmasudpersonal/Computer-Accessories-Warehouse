import React from 'react';
import Google from '../../../img/SocialLogin/google-logo3.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <button
                style={{ width: '240px', border: 'none', color:'rgb(71, 59, 59)' }} className='btn fw-bold mx-auto d-block my-3 continue-with-google'>
                <img style={{ width: '28px' }} src={Google} alt='' />
                <span className='px-1'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;