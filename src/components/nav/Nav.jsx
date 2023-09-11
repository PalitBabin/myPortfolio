import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {FaCode} from 'react-icons/fa6';
import {IoGridOutline} from 'react-icons/io5';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  // window.onscroll=()=>{
  //   const sections = document.querySelectorAll('section');
  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     //const sectionHeight = section.clientHeight;
  //     if (window.scrollY >= sectionTop-((sectionTop*70)/100) ) {
  //       setActiveNav(`#${section.id}`);
  //     }
  //   });
  //   return () => {
  //     return ()=> window.onscroll === null ;
  //   };
  // }
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FaCode /></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><IoGridOutline /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;