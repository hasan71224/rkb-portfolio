import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <h2 className='text-2xl font-bold text-orange-600 text-center py-5'>Contact Me</h2>
            <h1 className="text-5xl font-bold text-center">I Want To Hear From You</h1>
            <p className="text-1xl text-center mt-6">Please fill out the form on this section to contact with me. Or call between <br /> 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>

            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Send Email</h2>

                        <form action="https://formspree.io/f/mjvlzwjl" method="POST" id='my-form'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"
                                    name='name'
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                name='email'
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text"
                                name='phone'
                                    placeholder="Your Phone Number"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text"
                                name='subject'
                                    placeholder="Enter Subject"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text"
                                name='message'
                                    placeholder="Enter Message"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <input className="btn text-white w-full max-w-xs uppercase mt-3" type="submit" value='Submit' />
                        </form>
                    </div>
                    <div id='status'></div>
                </div>
            </div>
            <script type='text/javascript' src='../Contact/script.js'></script>
        </div>
    );
};

export default Contact;