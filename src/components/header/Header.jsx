import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import ScrollReveal from 'scrollreveal';
import { useEffect} from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const isSmallScreen = (window.innerWidth <=821); 
  
  useEffect(() => {

      const sr = ScrollReveal({
        reset: true,
        distance: isSmallScreen ? '20px': '80px',
        duration: 800,
        delay:  100,
        easing: 'ease',
        scale:1,
        desktop:true,
        mobile:true,
        viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
      });
  
      sr.reveal('.me',{origin:'bottom'});
      sr.reveal('main,.scroll__down',{origin:'top'});
      sr.reveal('.header__socials',{origin:'left'});
    
  }, [isSmallScreen]);

  return (
    <header>
      <div className="container header__container">
        <main>
        <h5>Hello I&apos;m</h5>
        <h1>
          <Typewriter
          options={{
            strings: ['Narendra Modi', 'Web Developer'],
            autoStart: true,
            loop: true,
          }}
          />

          </h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <CTA />
        </main>
        <HeaderSocials className='header__socials'/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header;