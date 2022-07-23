import React from 'react';
import target from '../../../Assets/method/target.svg'
import brush from '../../../Assets/method/brush.svg'
import energy from '../../../Assets/method/energy.svg'

const Method = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 mb-12">
                <div className="card-body justify-center items-center">
                    <div className="w-20 rounded">
                        <img src={target} alt='target' />
                    </div>
                    <h2 className="text-2xl card-title">Pixel Perfect</h2>
                    <p className='text-center'> Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
            
            <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 mb-12">
                <div className="card-body justify-center items-center">
                    <div className="w-20 rounded">
                        <img src={brush} alt='brush' />
                    </div>
                    <h2 className="text-2xl card-title">High Quality</h2>
                    <p className='text-center'> Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5 mb-12">
                <div className="card-body justify-center items-center">
                    <div className="w-20 rounded">
                        <img src={energy} alt='energy' />
                    </div>
                    <h2 className="text-2xl card-title">Awesome Idea</h2>
                    <p className='text-center'> Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                </div>
            </div>
        </div>
    );
};

export default Method;