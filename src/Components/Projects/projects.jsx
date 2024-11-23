import React from 'react'
import './projects.css'
import Header from '../Header/Header'
import arrow from '../../Assets/arrow.svg'
import GetinTouch from '../GetinTouch/getinTouch'
import Footer from '../Footer/footer'

function Projects() {
    return (
        <div>
            <Header />
            <div className="project-page">
                <div className="my-project">
                    <h1>
                        my <br />
                        project
                    </h1>
                </div>
                <div className="project-page-container">
                    <div className="project-page-items">
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p> Date: 11/24</p>
                            </div>

                            <div className="project-page-item-header">
                                <h1>Quick Nest</h1>
                                <p>Front-End Developer specializing in crafting responsive and visually appealing interfaces tailored for shoe brand websites. Skilled in HTML, CSS, and JavaScript, with a strong focus on delivering seamless navigation, clean and modern design, and an intuitive user experience. Dedicated to showcasing products effectively, ensuring smooth browsing across devices, and creating a shopping journey that highlights the brand's identity while enhancing customer satisfaction.</p>
                                <a href="https://kalyan3081.github.io/QuickNest/">GitHub - QuickNest</a>
                            </div>
                            <div className="project-page-item-image project-page-item-image1"></div>
                            <div className="project-page-item-footer"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="project-page-container">
                    <div className="project-page-items">
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p> Date: 11/24</p>
                            </div>

                            <div className="project-page-item-header">
                                <h1>Quick Nest</h1>
                                <p>Front-End Developer specializing in crafting responsive and visually appealing interfaces tailored for shoe brand websites. Skilled in HTML, CSS, and JavaScript, with a strong focus on delivering seamless navigation, clean and modern design, and an intuitive user experience. Dedicated to showcasing products effectively, ensuring smooth browsing across devices, and creating a shopping journey that highlights the brand's identity while enhancing customer satisfaction.</p>
                                <a href="https://kalyan3081.github.io/QuickNest/">GitHub - QuickNest</a>
                            </div>
                            <div className="project-page-item-image project-page-item-image1"></div>
                            <div className="project-page-item-footer"></div>
                        </div>
                    </div>
                </div> */}
            </div>
            <GetinTouch />
            <Footer />
        </div>
    )
}

export default Projects
