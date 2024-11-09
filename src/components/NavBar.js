import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='idContent'>
          <img src="./media/file.jpg" alt='logo acceuil' />
          <h3>AlexCoding</h3>
        </div>
      </div>

      <div className='navBar'>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "")}>
              <i className='fas fa-home'></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "navActive" : "")}>
              <i className='fas fa-images'></i>
              <span>Portfolio</span>
            </NavLink>
          </li>  
          <li>
            <NavLink to="/competences" className={({ isActive }) => (isActive ? "navActive" : "")}>
              <i className='fas fa-mountain'></i>
              <span>compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "navActive" : "")}>
              <i className='fas fa-address-book'></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='socialNetwork'>
        <ul>
          <li>
            <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/bipba' target="_blank" rel="noopener noreferrer">
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://codepen.com' target="_blank" rel="noopener noreferrer">
              <i className='fab fa-codepen'></i>
            </a>
          </li>
        </ul>
      <div className='signature'>
        <p>AlexCoding - 2024</p>
      </div>
      </div>
    </div>
  );
};

export default NavBar;









// import React from 'react';

// import { Link, NavLink } from 'react-router-dom';
// const NavBar = () => {
//     return (
//         <div className='sidebar'>
//            <div className='id'>
//                 <div className='idcontent'>
//                      <img src="./media/IMG_1297-1.jpg" alt='photo acceuil'/>
//                      <h3>Alexandre Empis</h3>
//                 </div>
//             </div>

//                 <div className='navBar'>
//                     <ul>
//                         <li>
//                             <NavLink to="/" activeClassName="navActive">
//                                 <i className='fas fa-home'></i>
//                                 <span>Acceuil</span>
//                             </NavLink>
//                         </li> 
//                         <li>
//                             <NavLink to="/competences" activeClassName="navActive">
//                                 <i className='fas fa-mountain'></i>
//                                 <span>compétences</span>
//                             </NavLink>
//                         </li>  
//                         <li>
//                             <NavLink to="/portfolio" activeClassName="navActive">
//                                 <i className='fas fa-images'></i>
//                                 <span>Portfolio</span>
//                             </NavLink>
//                         </li>  
//                         <li>
//                             <NavLink to="/contact" activeClassName="navActive">
//                                 <i className='fas fa-address-book'></i>
//                                 <span>Contact</span>
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='socialNetWork'>
//                     <ul>
//                         <li>
//                             <a href='https://www.linkedin.com' target="_blank" 
//                             rel="noopener noreferer"><i className='fab fa-linkedin'></i></a>
//                         </li>
//                         <li>
//                             <a href='https://www.github.com' target="_blank" 
//                             rel="noopener noreferer"><i className='fab fa-github'></i></a>
//                         </li>
//                         <li>
//                             <a href='https://www.twitter.com' target="_blank" 
//                             rel="noopener noreferer"><i className='fab fa-twitter'></i></a>
//                         </li>
//                         <li>
//                             <a href='https://codepen.com' target="_blank" 
//                             rel="noopener noreferer"><i className='fab fa-codepen'></i></a>
//                         </li>
//                     </ul>
//                 </div>     
//                 <footer>
//                   <p>  AlCoding - 2024 </p>
//                 </footer>


//         </div>
//     );
// };

// export default NavBar;