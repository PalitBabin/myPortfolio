import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Modi</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://twitter.com"><FiInstagram /></a>
      <a href="https://instagram.com"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Modi, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;