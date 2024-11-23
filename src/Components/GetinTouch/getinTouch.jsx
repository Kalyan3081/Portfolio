import React from 'react'
// import { Link } from 'react-router-dom'
import './getinTouch.css'
import flower2 from '../../Assets/flower2.svg'

function GetinTouch() {
    return (
        <div>
            <div className="get-in-touch">
                <h1>GET IN TOUCH</h1>
                <p>I am genuinely interested in opportunities in frontend development. If there are any current openings, I would be delighted to contribute and grow with your team.</p>
                <img src={flower2} alt="" />
            </div>
        </div>
    )
}

export default GetinTouch
