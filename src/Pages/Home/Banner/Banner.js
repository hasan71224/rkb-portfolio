import React from 'react';
import bannerPic from '../../../../src/Assets/shape-1.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen" id='banner'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerPic} className="max-w-sm rounded-lg" />
                <div className='mr-10'>
                    <h4 className="text-2xl font-bold text-orange-600">Hello, I'm</h4>
                    <h1 className="text-5xl font-bold">Md. Rakibul Hasan</h1>
                    <p className="py-6">An excellent academic record, ability to understand and test software, working knowledge of many programming language, and a strong understanding of core internet technologies. I seek to work as a software developer to further my knowledge in the IT sector and utilize my skills.</p>
                    <a className="btn rounded-full text-black bg-white hover:bg-orange-500 transition duration-700" href='' target='_blank'>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;