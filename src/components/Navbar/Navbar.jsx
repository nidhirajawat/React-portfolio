// import React, { useState } from 'react'
// import './Navbar.css'
// // import underline from '../../assets/under.webp'

// import logo from '../../assets/logo.png'
// const Navbar = () => {

//   const [menu,setMenu] = useState("home");
//   return (
//     <div id='navbar' className='navbar'>
//         <img src={logo} alt="" />
//         <ul className='nav-menu'>
//             <li><p onClick={()=>setMenu("home")}>Home</p></li>
//             <li><p onClick={()=>setMenu("about")}>About me</p></li>
//             <li><p onClick={()=>setMenu("services")}>Services</p></li>
//             <li><p onClick={()=>setMenu("work")}>Portfolio</p></li>
//             <li><p onClick={()=>setMenu("contact")}>Contact</p></li>
//         </ul>
//         <div className='nav-connect'>Connect With Me</div>
//     </div>
//   )
// }

// export default Navbar;



import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="Website Logo" />
      <ul className='nav-menu'>
        <li className={menu === 'home' ? 'active' : ''}>
          <AnchorLink className='anchor-link' href='#home' ><p onClick={() => setMenu('home')}>Home</p></AnchorLink>
        </li>
        <li className={menu === 'about' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={() => setMenu('about')}>About Me</p></AnchorLink>
        </li>
        <li className={menu === 'services' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={() => setMenu('services')}>Services</p></AnchorLink>
        </li>
        <li className={menu === 'work' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#mywork' ><p onClick={() => setMenu('work')}>Portfolio</p></AnchorLink>
        </li>
        <li className={menu === 'contact' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>
        </li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
