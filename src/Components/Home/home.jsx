import React, { useEffect, useRef } from 'react';
import './home.css';
import Header from '../Header/Header';
import flower from '../../Assets/flower.svg';
import another from '../../Assets/another.svg';
import arrow from '../../Assets/arrow.svg';
import { Link } from 'react-router-dom';
import GetinTouch from '../GetinTouch/getinTouch';
import Footer from '../Footer/footer';
import gsap from 'gsap';

function Home() {
    // Refs for animation
    const text1 = useRef(null);
    const text2 = useRef(null);
    const p1 = useRef(null);
    const animationContext = useRef(null); // For cleanup

    useEffect(() => {
        // GSAP Animation with cleanup
        animationContext.current = gsap.context(() => {
            const timeline = gsap.timeline();

            timeline.from([text1.current, text2.current], {
                duration: 1,
                skewY: 15,
                y: 400,
                stagger: {
                    amount: 0.2, // Delay between each item
                },
            });

            timeline.from(p1.current, {
                duration: 0.6,
                x: -100,
                opacity: 0,
                delay: 0.2,
            });
        });

        return () => {
            animationContext.current?.revert(); // Clean up animations
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="container1">
                    <div className="txt-line" id="pawan">
                        <p ref={text1}>Pawan <br />Kalyan</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="left-side-quote">
                <p ref={p1}>“The biggest adventure you can take is to live the life of your dreams.”</p>
            </div>
            <div className="container">
                <div></div>
                <div className="container1">
                    <div className="txt-line" id="digital">
                        <p ref={text2}>Frontend Web <br />Development</p>
                    </div>
                </div>
            </div>
            <div className="flower-svg">
                <img src={flower} alt="" />
            </div>
            <div className="short-about">
                <div className="main-h1-short-about">
                    <h1 className="main-short-about">Shortly</h1>
                    <h1 className="main-short-about">About</h1>
                    <h1 className="main-short-about">MySelf!</h1>
                </div>
                <div className="sub-main-p-short-about">
                    <p className="sub-main-short-about">
                        I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE. <br />
                        I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
                    </p>
                </div>
                <div className="another-svg">
                    <img src={another} alt="" />
                </div>
            </div>
            <div className="my-skills-main-reel">
                <div className="my-skills-reel" id="skill-reel">
                    <div className="reel-item">&nbsp; -- Html</div>
                    <div className="reel-item">&nbsp; -- CSS</div>
                    <div className="reel-item">&nbsp; -- JavaScript</div>
                    <div className="reel-item">&nbsp; -- React</div>
                    <div className="reel-item">&nbsp; -- BootStrap</div>
                </div>
                <div className="skill-set-boxes">
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">HTML5</h1>
                        <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
                        <p>___</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">CSS3</h1>
                        <p className="skill-set-box-p">I use this to style and bring design to browsers</p>
                        <p>___</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">javascript</h1>
                        <p className="skill-set-box-p">With this technology I create visual effects and interaction and DOM elements</p>
                        <p>___</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">React.js</h1>
                        <p className="skill-set-box-p">I loved it! I use it to create applications that have a lot of reactivity</p>
                        <p>___</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
                        <p className="skill-set-box-p">I used this as an animation library, The most loved ones!</p>
                        <p>___</p>
                    </div>
                </div>
                <div className="project-and-work">
                    <h1>
                        <Link className="h1-project" to="/projects">
                            My Projects and Works <img src={arrow} alt="" />
                        </Link>
                    </h1>
                    <br />
                    <p>Click me!</p>
                </div>
                <GetinTouch />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
