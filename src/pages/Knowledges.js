import React from 'react';
import NavBar from '../components/NavBar';
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import OtherSkills from '../components/knowledges/OtherSkills';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <NavBar/>
           <div className='knowledgesContent'>
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Hobbies/>
           </div>
        </div>
    );
};

export default Knowledges;