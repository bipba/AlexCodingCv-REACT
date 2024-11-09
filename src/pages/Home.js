import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <div className='home'>
           <NavBar/>
           <div className='homeContent'>
            <div className='content'>
                <h1>AlexCoding</h1>
                <h2>Développeur Front-end</h2>
                <div className='pdf'>
                <a href='./media/33e3a_cv 0124.pdf' target='_blank'>Download CV</a>
                </div>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Home;