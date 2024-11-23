import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import './about.css';
import gsap from 'gsap';
import flower from '../../Assets/flower.svg';
import GetinTouch from '../GetinTouch/getinTouch';
import Footer from '../Footer/footer';

function About() {
    let text1 = useRef(null);
    let image = useRef(null);
    let p1 = useRef(null);
    const timeline_about = gsap.timeline();
    const animationContext = useRef(null); // For cleanup

    useEffect(() => {
        timeline_about.from([text1], {
            duration: 0.8,
            y: 500,
            skewY: 10,
            stagger: {
                amount: 0.4
            }
        }, "-=.5")
            .from(image, {
                duration: 1.5,
                y: 300,
                delay: 0.2,
                opacity: 0
            }, "-=.5")
            .from(p1, {
                duration: 0.5,
                x: 200,
                skewX: 10,
                opacity: 0
            })
            .to([text1, image, p1], {
                opacity: 1, // Ensure final opacity is 1
                y: 0,       // Reset y position to original
                x: 0,       // Reset x position if needed
                skewY: 0,   // Reset skewY to normal
                skewX: 0    // Reset skewX to normal
            });

        // Cleanup: Stop animation and reset states
        return () => {
            timeline_about.kill(); // Proper cleanup to stop any animations
        };
    }, []); // Empty array ensures the effect runs once

    return (
        <>
            <div>
                <div className="about">
                    <Header timeline={timeline_about} />
                    <div className="about-container">
                        <div className="container-text">
                            <div className="container-inner-text1">
                                <p ref={text1}>
                                    Pawan <br /> Kalyan
                                </p>
                            </div>
                            <div className="container-inner-text2">
                                <p></p>
                            </div>
                        </div>
                        <div ref={p1} className="container-quote container-quote1">
                            I am a passionate Frontend Developer.
                        </div>
                        <div className="container-quote container-quote2">
                            Skilled in languages and frameworks such as <br /> HTML, CSS, JavaScript, and React.
                        </div>

                        <div className="container-image" ref={image}></div>
                    </div>

                    <div className="about-container2">
                        <div className="about-container2-heading">
                            <div className="about-text-lower">
                                <p>Front-End</p>
                            </div>
                            <div className="about-text-lower">
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className="about-container2-p">
                            <h2>Education</h2>
                            <p>Lovely Professional University (2020-2023) <br /> B.Tech <br /> CGPA: 8.08</p>
                            <p className="about-container2-p-right">
                                Sanjay Gandhi Polytechnic (2017-2020) <br /> Diploma <br /> Percentage: 79.49%
                            </p>
                        </div>
                        <div className="about-container2-heading2">
                            <div className="about-text-lower">
                                <p>Why do you want to hire me?</p>
                            </div>
                        </div>
                        <div className="about-container2-p">
                            <p>Creative Frontend Development: <br /> Specializing in visually appealing and interactive user interfaces.</p>
                            <p>Strong Technical Skills: <br /> Proficient in HTML, CSS, JavaScript, and React for building responsive, dynamic applications.</p>
                            <p>Adaptability: <br /> Always learning new tools and technologies to stay updated.</p>
                            <p>Problem-Solving: <br /> Finding efficient solutions to development challenges.</p>
                            <p>Collaborative: <br /> Great team player with excellent communication skills.</p>
                        </div>
                        <div className="about-container-flower">
                            <img src={flower} alt="Flower decoration" />
                        </div>
                    </div>

                    <div className="about-footer">
                        <GetinTouch />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
