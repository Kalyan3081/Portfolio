import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="message-for-users">
                        <span>
                            Please contact me in any way <br /> you like
                        </span>
                    </div>
                    <div className="social-links">
                        <div className="social-links-h">
                            Social
                        </div>
                        <div className="social-links-items">
                            <a href="https://github.com/Kalyan3081/">Github</a>
                            <a href="https://www.linkedin.com/in/pawan-kalyan-79491b22b/">LinkedIn</a>
                        </div>
                    </div>
                    <div className="social-links">
                        <div className="social-links-h">
                            Contact
                        </div>
                        <div className="social-links-items">
                            <a href="mailto:pawan.k30082001@gmail.com">Mail</a>
                            <a href="https://wa.me/918880644444" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="tel:+918880644444">+ 91 88806 44444</a>
                        </div>

                    </div>
                    <div className="footer-menu social-links">
                        <div className="footer-menu-h social-links-h">
                            Other Menu
                        </div>
                        <div className="footer-menu-links social-links-items">
                            <p className="footer-menu-links-items" to="/">Home.</p>
                            <p className="footer-menu-links-items" to="/about">About.</p>
                            <p className="footer-menu-links-items">Projects.</p>
                            <p className="footer-menu-links-items">Contact.</p>
                        </div>
                    </div>
                    <div className="footer-btn">
                        <a href="" className='footer-btn-a'>Get Started!</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="left-footer-bottom">
                        <p>Ballari, Karnataka</p>
                    </div>
                    {/* <div className="right-footer-bottom">
                        <p>2021. Taimoor Shahzada. ALL RIGHT RESERVED</p>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Footer