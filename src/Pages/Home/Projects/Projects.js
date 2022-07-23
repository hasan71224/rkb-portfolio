import React from 'react';
import p2 from '../../../Assets/portfolio/p2.png'
import p3 from '../../../Assets/portfolio/p3.png'
import p4 from '../../../Assets/portfolio/p4.png'
const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='text-2xl font-bold text-orange-600 text-center py-5'>Portfolio</h2>
            <h1 className="text-5xl font-bold text-center">My Amazing Works</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-16'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 mb-12">
                    <div className="card-body justify-center items-center">
                        <div className="w-20 rounded">
                            <img src={p2} alt='target' />
                        </div>
                        <h2 className="text-2xl card-title text-center">Robotics Parts Manufacturer</h2>
                        <p className='text-center'> This Project have a home page, blog page, My portfolio page, parts, dashboard and login option. and navbar and footer option is common part of this project.</p>
                        <div className="card-actions">
                            <a className="btn mt-3 text-black  bg-orange-500 hover:bg-white bg-white transition duration-700" href='/roboticsPM'>Details</a>
                        </div>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 mb-12">
                    <div className="card-body justify-center items-center">
                        <div className="w-20 rounded">
                            <img src={p4} alt='target' />
                        </div>
                        <h2 className="text-2xl card-title text-center">Sports Mans Warehouse</h2>
                        <p className='text-center'> This is a small warehouse business website, this site have a header section and some manue option. home, blog, manage inventory inventory, add item, My item and login option.</p>
                        <div className="card-actions">
                            <a className="btn mt-3 text-black  bg-orange-500 hover:bg-white bg-white transition duration-700" href='/sportsMW'>Details</a>
                        </div>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 mb-12">
                    <div className="card-body justify-center items-center">
                        <div className="w-20 rounded">
                            <img src={p3} alt='target' />
                        </div>
                        <h2 className="text-2xl card-title">One Studio</h2>
                        <p className='text-center'> A web application to book Photographer, Cinematographers for events and have features like Authentication, Firebase hook. Technology used in this projectReact, Firebase, HTML, CSS, Bootstrap</p>
                        <div className="card-actions">
                            <a className="btn mt-3 text-black  bg-orange-500 hover:bg-white bg-white transition duration-700" href='/oneStudio'>Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;