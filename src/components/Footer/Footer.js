import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
      <div className="footer"> 
      <div className="footer-container">
            <div className="links-container">
                <div className="newsletter-form">
                    <form>
                    <input type="text" value="Enter email" placeholder="email" />
                    <input type="submit" value="submit" />
                    </form>
                </div>
                <div className="footer-links-container">
                    
                    <div className="footer-links">
                        <Link>About us</Link>
                        <Link>Testimonials</Link>
                        <Link>Location</Link>
                        <Link>ContactUs</Link>
                        <Link>ratings</Link>
                    </div>
                    <div className="footer-links">
                        <Link>About us</Link>
                        <Link>Testimonials</Link>
                        <Link>Location</Link>
                        <Link>ContactUs</Link>
                        <Link>ratings</Link>
                    </div>
                    <div className="footer-links">
                        <Link>About us</Link>
                        <Link>Testimonials</Link>
                        <Link>Location</Link>
                        <Link>ContactUs</Link>
                        <Link>ratings</Link>
                    </div>
                    <div className="footer-links">
                        <Link>About us</Link>
                        <Link>Testimonials</Link>
                        <Link>Location</Link>
                        <Link>ContactUs</Link>
                        <Link>ratings</Link>
                    </div>
                </div>
                </div>
                
        </div>
        <div className="copyright-social-links">
        <div className="copyright">
            copyrights &#169; reserved at freelancer
        </div>
        <div className="social-links">
            <ul>
                <li>
                    <Link to=''>
                        <i className='fa fa-facebook-square'></i>
                    </Link>
                </li>
                <li>
                    <Link to=''>
                        <i className='fa fa-instagram'></i>
                    </Link>
                </li>
                <li>
                    <Link to=''>
                        <i className='fa fa-twitter-square'></i>
                    </Link>
                </li>
                <li>
                    <Link to=''>
                        <i className='fa fa-linkedin-square'></i>
                    </Link>
                </li>
            </ul>
        </div>
   
</div>
</div>
    )

}

export default Footer