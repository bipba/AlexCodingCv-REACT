import React from 'react';

const Project = ({ item }) => {
  const { name, languagesIcons, picture, source } = item;

  return (
    <div className='project'>
      <div className='icons'>
        {languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <img src={picture} alt={name} style={{ width: '300px', height: '280px' }} />
      <h3>{name}</h3>
      <a href={source} target="_blank" rel="noopener noreferrer">
        <div className="project-button">
          <i className="fa-solid fa-bullseye"></i>
          <span>Projet</span>
        </div>
      </a>
    </div>
  );
};

export default Project;









// import React, { Component } from 'react';

// export default class Project extends Component {
//   render() {
//     let { name, languagesIcons, picture, source } = this.props.item; 

//     return (
//         <div className='project'>
//           <div className='icons'>
//             {languagesIcons.map(icon =>
//               <i className={icon} key={icon}></i>
//             )}
//           </div>
//           <img src={picture} alt={name} style={{ width: '300px', height: '280px' }} />
//           <h3>{name}</h3>
//       <a href={source} target="_blank" rel="noopener noreferrer"> 
//           <div className="project-button">
//           <i className="fa-solid fa-bullseye"></i>
//           <span>projet</span>
//         </div>
//         </a>
//         </div>
     
//     );
//   }
// }
