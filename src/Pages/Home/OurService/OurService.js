import React from 'react';
import img1 from '../../../img/service/computer-service.jpg';
import img2 from '../../../img/service/laptop-service.jpg';
import img3 from '../../../img/service/mobile-service.jpg';
import './OurService.css';

const OurService = () => {
    return (
        <div className='ourservice-bg pt-5'>
            <hr className='w-50 hr-service mx-auto' />
            <h3 className='text-center fw-bold service-h3'>Our Service</h3>
            <hr className='w-50 hr-service mx-auto mb-5' />
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Computer</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">laptop</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Phone</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;