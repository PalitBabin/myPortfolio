import './about.css';
import ME from '../../assets/me.png';
import {BiRefresh} from 'react-icons/bi';
import {FaCode} from 'react-icons/fa6';
import {IoGridOutline} from 'react-icons/io5';
import ScrollReveal from 'scrollreveal';
import { useEffect} from 'react';

const About = () => {

  const isSmallScreen = (window.innerWidth <= 821);
  useEffect(() => {
    
    const sr = ScrollReveal({
      reset: true,
      distance: isSmallScreen ? '20px' : '80px',
      duration:  1000,
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
    }
    });

    sr.reveal('.heading',{origin:'top'});
    sr.reveal('.about__me',{origin:'left'});
    sr.reveal('.about__content',{origin:'right'});
  
  }, [isSmallScreen]);
  return (
    <section id='about'>
      <h5 className='heading'>Get to know</h5>
      <h2 className='heading'>About Me</h2>
      <div className='container about__container'>
          <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt='About Image' />
              </div>
          </div>
          <div className='about__content'>
              <div className='about__cards'>
                <article className='about__card'>
                    <BiRefresh className='about__icon'/>
                    <h5>Refreshing</h5>
                    <small> knowledge</small>
                </article>
                <article className='about__card'>
                    <FaCode className='about__icon'/>
                    <h5>Skills</h5>
                    <small>Top MERN Skills</small>
                </article>
                <article className='about__card'>
                    <IoGridOutline className='about__icon'/>
                    <h5>Projects</h5>
                    <small>15+ Completed</small>
                </article>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Veritatis blanditiis reiciendis labore facere, obcaecati 
                 maxime fugiat ad non ea autem soluta vero dolore! Voluptates velit in porro? 
                 Fugiat, accusamus magnam!
              </p>
              <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About;