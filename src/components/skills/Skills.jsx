import './skills.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import ScrollReveal from 'scrollreveal';
import { useEffect} from 'react';

const Skills = () => {

  const isSmallScreen = (window.innerWidth <= 821);
  useEffect(() => {
    
      const sr = ScrollReveal({
        reset: true,
        distance: isSmallScreen ? '20px' : '80px',
        duration:  1000,
        delay: 100,
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
  
      sr.reveal('.heading,.skills__frontend',{origin:'top'});
      sr.reveal('.skills__backend',{origin:'bottom'});
    

  }, [isSmallScreen]);

  return (
    <section id="skills">
      <h5 className='heading'>What Skills I have</h5>
      <h2 className='heading'>My Skills</h2>

      <div className="container skills__container">

        {/* START OF FRONTEND */}
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>jQuery</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        {/* START OF BACKEND */}
        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>SQL</h4>
                <small className="text-light">Basic</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>EJS</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>GitHub</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="skills__details">
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                <h4>APIs</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>
          </div>
          {/* END OF BACKEND */}
        </div>
      </div>
    </section>
  )
}

export default Skills;