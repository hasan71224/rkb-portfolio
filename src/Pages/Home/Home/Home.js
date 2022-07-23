import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Developer from '../Developer/Developer';
import Method from '../Method/Method';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Method></Method>
            <Developer></Developer>
            {/* <Projects></Projects> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;