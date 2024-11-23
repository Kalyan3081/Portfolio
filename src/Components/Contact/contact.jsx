import React, { useEffect, useRef } from 'react';
import './contact.css';
import Header from '../Header/Header';
import flower from '../../Assets/flower.svg';
import Footer from '../Footer/footer';
import gsap from 'gsap';

function Contact() {
    const text1 = useRef(null);  // Set up reference for animation
    const timeline_contact = gsap.timeline();
    const animationContext = useRef(null); // For cleanup


    useEffect(() => {
        // Ensure the animation runs only once when the component mounts
        timeline_contact.from(text1.current, {
            duration: 1.5,  // Adjusted duration
            skewY: 10,
            y: 50,  // Adjusted y position to avoid pushing it too far down
            // opacity: 0.5,
            stagger: 0.4
        }); return () => {
            animationContext.current?.revert(); // Clean up animations
        };
    }, []); // Empty dependency array ensures this runs once after mount

    return (
        <div>
            <Header timeline={timeline_contact} />
            <div className="contact-page">
                <div className="contact-page-container">
                    <h1 ref={text1}>Let's talk about <br /> the project? <img src={flower} alt="Flower" /></h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
