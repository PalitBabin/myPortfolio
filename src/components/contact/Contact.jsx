import './contact.css';
import {MdMailOutline} from 'react-icons/md';
import {LiaTelegram} from 'react-icons/lia';
import {BsWhatsapp} from 'react-icons/bs';
import ScrollReveal from 'scrollreveal';
import { useEffect} from 'react';

const Contact = () => {

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
  
      sr.reveal('form,.heading',{origin:'top'});
      sr.reveal('.contact__options',{origin:'left'});
    
   
  }, [isSmallScreen]);


  const handleSubmit=(e)=>{
    e.preventDefault();
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5 className='heading'>Get In Touch</h5>
      <h2 className='heading'>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>dummyemail@gmail.com</h5>
              <a href="mailto:dummyemail@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
              <LiaTelegram className='contact__option-icon'/>
              <h4>Telegram</h4>
              <h5>myTelegramName</h5>
              <a href="https://telegram.me/share/url?url=<URL>&text=<TEXT>" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+91123456789</h5>
              <a href="https://api.whatsapp.com/send?phone=+91123456789" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="http://localhost:5173"></input>
          <input type="text" name='name' placeholder='Your Full Name' autoComplete='off' required/>
          <input type="email" name='email' placeholder='Your Email' autoComplete='off' required/>
          <textarea name="message" rows="7" placeholder='Your Message' minLength={10} autoComplete='off' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;