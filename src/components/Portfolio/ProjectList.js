import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolioData);
  }, []); // Le tableau vide [] assure que le code s'exécute une seule fois lors du premier rendu

  return (
    <div className='portfolioContent'>
      <div className='projects'>
        {projects.map((item) => (
          <Project key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;









// import React, { Component } from 'react';
// import { portfolioData } from '../../data/portfolioData';
// import Project from './Project';


// export default class ProjectList extends Component {
  
//   state={projects:portfolioData};
  
//     render() {
//         let{projects}=this.state;

//     return (
//       <div className='portfolioContent'>
//         <div className='projects'>
//             {
//                 projects.map(item=>{
//                     return(
//                         <Project 
//                         key={item.id}
//                         item={item}
//                         />
//                     )
//                 })
//             }
//         </div>
//       </div>
// )
// }
// }


