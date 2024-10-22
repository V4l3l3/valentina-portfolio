import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionId = `#${section.id}`;
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionOffsetTop - windowHeight * 0.7 &&
          (scrollPosition < sectionOffsetTop + sectionHeight ||
            scrollPosition >= documentHeight - windowHeight - footer.offsetHeight)
        ) {
          setActiveNav(sectionId);
          break;
        }
      }

      // Check if the scrollPosition is in the footer
      if (
        scrollPosition >= documentHeight - windowHeight - footer.offsetHeight &&
        scrollPosition <= documentHeight - windowHeight
      ) {
        setActiveNav('#footer');
      }

      // Check if the scrollPosition is in the header
      if (scrollPosition < header.offsetHeight - 300) {
        setActiveNav('#');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
}

export default Nav;
