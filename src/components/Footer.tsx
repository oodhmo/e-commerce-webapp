import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import FacebookIcon from './icons/FacebookIcon';
import InstaIcon from './icons/InstaIcon';
import XIcon from './icons/XIcon';

const Footer = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/detail');

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sneakers</h3>
          <ul>
            <li>Sneaker Inc.</li>
            <li>Business Registration Number: 123-45-67890</li>
            <li>CEO: John Doe</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <PhoneIcon />
              Head Office: +82-0-1234-5678
            </li>
            <li>
              <PhoneIcon />
              Customer Service: 1588-1234
            </li>
            <li>
              <EnvelopeIcon />
              help@sneaker.com
            </li>
            <li>
              <MapPinIcon />
              123 Teheran-ro, Gangnam-gu, Seoul
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <FacebookIcon />
            <InstaIcon />
            <XIcon />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 oodhmo</p>
        <p>
          {isDetailPage ? (
            <>
              Design based on{' '}
              <a href="https://www.frontendmentor.io/home">Frontend Mentor</a> |
              App icon designed by{' '}
              <a href="https://www.frontendmentor.io/home">Frontend Mentor</a>{' '}
              and{' '}
              <a href="https://github.com/tailwindlabs/heroicons">heroicons</a>{' '}
            </>
          ) : (
            <>
              Designed and developed by oodhmo | App icon designed by{' '}
              <a href="https://www.frontendmentor.io/home">Frontend Mentor</a>{' '}
              and{' '}
              <a href="https://github.com/tailwindlabs/heroicons">heroicons</a>{' '}
            </>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
