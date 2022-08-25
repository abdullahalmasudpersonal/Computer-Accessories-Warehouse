import React from 'react';
import './Header.css';
import logo from '../../../img/logo/computer-accessories-warehouse-removebg-preview.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <Link to='/'><a class="navbar-brand"> <img src={logo} width='50px' height='40px' alt='' /></a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/inventories' style={{textDecoration:'none'}}><a class="nav-link active fw-bold" aria-current="page" href="">Inventories</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/blogs' style={{textDecoration:'none'}}><a class="nav-link active fw-bold" aria-current="page" href="#">Blogs</a></Link>
                            </li>
                        </ul>
                       <div className='d-flex'>
                       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' style={{textDecoration:'none'}}><a class="nav-link active fw-bold" aria-current="page" href="#">Add Item</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' style={{textDecoration:'none'}}><a class="nav-link active fw-bold" aria-current="page" href="#">Manage Item</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' style={{textDecoration:'none'}}><a class="nav-link active fw-bold" aria-current="page" href="#">My Item</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' style={{textDecoration:'none'}}><a class="nav-link active fw-bold" aria-current="page" href="#">Register</a></Link>
                            </li>
                        </ul>
                       </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;