import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="sidebar" role="complementary">
      <div className="id" role="banner">
        <div className="idContent">
          <img src="./media/IMG_world-1.png" alt="Logo AlexCoding" />
          <h3>AlexCoding</h3>
        </div>
      </div>

      <div className="navBar" role="navigation">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Page d'accueil">
              <i className="fas fa-home" aria-hidden="true"></i>
              <span>Acceuil</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Portfolio">
              <i className="fas fa-images" aria-hidden="true"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/competences" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Compétences">
              <i className="fas fa-mountain" aria-hidden="true"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Contact">
              <i className="fas fa-address-book" aria-hidden="true"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork" role="contentinfo">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/bipba" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter Profile">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://codepen.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="CodePen Profile">
              <i className="fab fa-codepen" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>AlexCoding - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;










// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div className='sidebar'>
//       <div className='id'>
//         <div className='idContent'>
//           <img src="./media/file.jpg" alt='logo acceuil' />
//           <h3>AlexCoding</h3>
//         </div>
//       </div>

//       <div className='navBar'>
//         <ul>
//           <li>
//             <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "")}>
//               <i className='fas fa-home'></i>
//               <span>Acceuil</span>
//             </NavLink>
//           </li>
        
//           <li>
//             <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "navActive" : "")}>
//               <i className='fas fa-images'></i>
//               <span>Portfolio</span>
//             </NavLink>
//           </li>  
//           <li>
//             <NavLink to="/competences" className={({ isActive }) => (isActive ? "navActive" : "")}>
//               <i className='fas fa-mountain'></i>
//               <span>compétences</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" className={({ isActive }) => (isActive ? "navActive" : "")}>
//               <i className='fas fa-address-book'></i>
//               <span>Contact</span>
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       <div className='socialNetwork'>
//         <ul>
//           <li>
//             <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-linkedin'></i>
//             </a>
//           </li>
//           <li>
//             <a href='https://github.com/bipba' target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-github'></i>
//             </a>
//           </li>
//           <li>
//             <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-twitter'></i>
//             </a>
//           </li>
//           <li>
//             <a href='https://codepen.com' target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-codepen'></i>
//             </a>
//           </li>
//         </ul>
//       <div className='signature'>
//         <p>AlexCoding - 2024</p>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;









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