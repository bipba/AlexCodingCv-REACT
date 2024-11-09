import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    let { name, languagesIcons, picture, source } = this.props.item; // Ajout de source
    console.log(this.props);

    return (
        <div className='project'>
          <div className='icons'>
            {languagesIcons.map(icon =>
              <i className={icon} key={icon}></i>
            )}
          </div>
          <img src={picture} alt={name} style={{ width: '300px', height: '280px' }} />
          <h3>{name}</h3>
      <a href={source} target="_blank" rel="noopener noreferrer"> {/* Utilisation de source */}
          <div className="project-button">
          <i className="fa-solid fa-bullseye"></i><span> projet</span>
          {/* <button>Voir le projet</button> */}
        </div>
        </a>
        </div>
     
    );
  }
}
