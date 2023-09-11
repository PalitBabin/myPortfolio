import './projects.css';
import { data } from '../../data';
import ScrollReveal from 'scrollreveal';
import { useEffect} from 'react';

const Projects = () => {

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
  
      sr.reveal('.heading',{origin:'top'});
      sr.reveal('.project__item',{origin:'bottom'});
    

  }, [isSmallScreen]);

  return (
    <section id="projects">
      <h5 className='heading'>My Recent Work</h5>
      <h2 className='heading'>Projects</h2>

      <div className="container project__container">

        {
          data.map(item=>
            
        (<article key={item.id} className="project__item">
          <div className="project__item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <div className="project__item-cta">
          <a href={item.github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
          <a href={item.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>)
            )
        }

      </div>
    </section>
  )
}

export default Projects;