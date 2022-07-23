import React from 'react';
import developer from '../../../../src/Assets/shape-2.png'
const Developer = () => {
    return (
        <div className="hero min-h-screen" id='about'>
            <div className="hero-content flex-col lg:flex-row">
                <img src={developer} className="max-w-sm rounded-lg" />
                <div className='mr-10 px-6'>
                    <h4 className="text-2xl font-bold text-orange-600">I'm a Developer</h4>
                    <h1 className="text-5xl font-bold">I Can Develop Anything You Want</h1>
                    <p className="py-6">Hello there! I'm a Android Developer, and I'm very passionate and dedicated to my work. With 3 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                    <a className="btn rounded-full text-black bg-white hover:bg-orange-500 transition duration-700">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Developer;