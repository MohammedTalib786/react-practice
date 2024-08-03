import React from 'react'
import './errorpage.css'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section id='sec' >
            <div className="container">
                <div className="text">
                    <h1 id='text-h1' >Page Not Found</h1>
                    <p id='text-p' >We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                    <ul id='ul' className="menu  " style={{ listStyle: "none" }}>
                        <li><Link id='a' to="/">Go to Homepage</Link></li>
                    </ul>
                </div>
                <div><img className="image " id='img' src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt="" /> </div>
            </div>
        </section>
    )
}

export default ErrorPage