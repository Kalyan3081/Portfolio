import React, { useEffect, useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '../../Assets/menu.svg';
import gsap from 'gsap';

function Header() {
    const li1 = useRef(null);
    const li2 = useRef(null);
    const li3 = useRef(null);
    const li4 = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.from([li1.current, li2.current, li3.current, li4.current], {
            opacity: 0,
            duration: 1,
            delay: 0.2,
            y: 20,
            opacity: 1,
            stagger: {
                amount: 0.6,
            },
        });
    }, []);

    return (
        <div>
            <header>
                <div id="logo">
                    <div className="toggle-menu">
                        <img src={MenuIcon} alt="Menu Icon" />
                    </div>
                    <ul className="menu-items">
                        <li ref={li1}>
                            <Link to="/" className="li">Home</Link>
                        </li>
                        <li ref={li2}>
                            <Link to="/about" className="li">About</Link>
                        </li>
                        <li ref={li3}>
                            <Link to="/projects" className="li">Projects</Link>
                        </li>
                        <li ref={li4}>
                            <Link to="/contact" className="li">Contact</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
