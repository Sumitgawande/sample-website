
import React from 'react'
import Footer from '../../components/Footer/Footer';
import MapG from '../../components/MapG';
import Navbar from '../../components/Navbar/Navbar';
import './Contact.css'


const Contact = () => {

    return (
        <>
            <Navbar />
            <div>

                <div className="contact-info">
                    <p>
                        Contact Us: 9999999999
                </p>
                    <p>
                        Email Us:abc@xyz.com
                </p>
                </div>

                <div className="map">
                {/* <MapG/> */}
                </div>

            </div>
            <Footer />
        </>
    )

}



export default Contact;