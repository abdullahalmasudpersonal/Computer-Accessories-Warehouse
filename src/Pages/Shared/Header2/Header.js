import React from 'react';
import './Header.css';
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header2 = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav class="navbar sticky-top navbar-expand-xl navber-bg">
                <div class="container">
                    <Link to='/'><a class="navbar-brand"> <img src={logo} width='50px' height='40px' alt='' /></a></Link>
                    <button class="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/inventories' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="">Inventories</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/blogs' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Blogs</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/blogs' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Connect Us</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/blogs' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">About</a></Link>
                            </li>
                        </ul>

                        <div className='d-flex'>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to='/add-item' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Add Item</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/manage-item' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Manage Item</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/my-item' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">My Item</a></Link>
                                </li>
                                {
                                    user ?
                                        <li class="dropdown nav-item">
                                                <img src={user.photoURL} style={{ borderRadius: '50%', cursor: 'pointer' }} width='30px' className='pt-1' alt='' />
                                            <div className='dropdown-content py-2'>
                                                <div className='profile profile-img'>
                                                    <img src={user.photoURL} style={{ borderRadius: '50%', cursor: 'pointer' }} width='60px' className='pt-1 ' alt='' />
                                                </div>
                                                <div className='profile profile-displayname'>
                                                    <h6 className='fw-bold pt-3'>{user.displayName}</h6>
                                                </div>
                                                <div className='profile pt-2 pb-2'>
                                                    <h6 className='fw-bold profile-view'>View Profile</h6>
                                                </div>
                                                <li className='dropdown2'>
                                                    <Link to='/keyboard'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a>Bluetooth Speaker</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/keyboard'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a>Voice Recorder</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/keyboard'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a>Voice Recorder</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/keyboard'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a>Voice Recorder</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li class="dropdown2">
                                                    <a onClick={handleSignOut} class="nav-link active fw-bold " aria-current="page" href="#"> <FontAwesomeIcon icon={faSignOut} style={{color:'gray'}} className='pl-1' /> <span className='pl-1' style={{color:'gray'}}>Logout</span></a>
                                                </li>
                                            </div>
                                        </li>
                                        :
                                        <li class="nav-item">
                                            <Link to='/login' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Login</a></Link>
                                        </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header2;