import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './About.css'


const About = () => {


    return (
        <div>
            <Navbar />
            <div className="aboutUS">
                <div className='about-us-container'>
                    <div className="about-image">
                        <img  className="companion-image"  src={'/images/aboutUs.jpg'} />
                    </div>
                    <div className="companion-text">
                        <h3>About US</h3>
                        <p className="about">
                            An element with position: sticky; is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
                            Note: Internet Explorer, Edge 15 and earlier versions do not support sticky positioning. Safari requires a -webkit- prefix (see example below). You must also specify at least one of top, right, bottom or left for sticky positioning to work.
                            To learn more about CSS positoning, read our CSS Position tutorial.
           </p>
                    </div>
                </div>
                <div className='our-mission-container'>
                
                <div className="companion-text">
                <h3>Our mission</h3>
                    <p>
                        An element with position: sticky; is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
                        Note: Internet Explorer, Edge 15 and earlier versions do not support sticky positioning. Safari requires a -webkit- prefix (see example below). You must also specify at least one of top, right, bottom or left for sticky positioning to work.
                        To learn more about CSS positoning, read our CSS Position tutorial.
           </p> 
                    </div>
                    <div className="mission-image">
                <img  className="companion-image"   src={'/images/aboutUs.jpg'} />
                    </div>   
                </div>


                <div className="testimonials">
                    <table >
                        <tr className="left-container" >
                            <td>
                                <p>The blogs content has high quality and latest information as well.</p>
                                <h4>-User name</h4>
                            </td>
                        </tr>
                        <tr className="left-container">
                            <td>
                                <p>The blogs content has high quality and latest information as well.</p>
                                <h4>-User name</h4>
                            </td>
                        </tr>
                    </table>
                    <table >
                        <tr className="right-container">
                            <td>
                                <p>The blogs content has high quality and latest information as well.</p>
                                <h4>-User name</h4>
                            </td>
                        </tr>
                        <tr className="right-container">
                            <td>
                                <p>The blogs content has high quality and latest information as well.</p>
                                <h4>-User name</h4>
                            </td>
                        </tr>
                    </table>

                   
                </div>
            </div>
            <Footer />
        </div>
    )

}



export default About;