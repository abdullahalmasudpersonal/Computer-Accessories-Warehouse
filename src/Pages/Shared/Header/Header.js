import React from 'react';
import './Header.css';
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <div>
            <nav class="navbar py-1 navbar-expand-lg header-bg">
                <div class="container ">
                    <Link to='/'><a class="navbar-brand"> <img src={logo} width='50px' height='40px' alt='' /></a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                                <li class="nav-item">
                                    <Link to='/my-item' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Masud</a></Link>
                                </li>
                                {
                                    user ?
                                        <li class="nav-item">
                                            {/* <a onClick={handleSignOut} class="nav-link active fw-bold" aria-current="page" href="#">Sign Out</a> */}

                                            <div className='d-flex justify-content-center align-items-center dropdown-profile'>
                                                <img src={user.photoURL} style={{ borderRadius: '50%', cursor: 'pointer' }} width='30px' className='pt-1 drop-img' alt='' />
                                                <div class="dropdown-content py-2">
                                                    <a href="#">Link 1</a>
                                                    <a href="#">Link 2</a>
                                                    <a href="#">Link 3</a>
                                                </div>
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

export default Header;