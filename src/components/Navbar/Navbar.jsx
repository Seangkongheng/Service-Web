import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav>
            <div className="nav-brand">
                <h3>Complete Tap</h3>
            </div>
            <div className="nav-list-item">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Technology</li>
                    <li>Case Studies</li>
                    <li>About</li>
                    <li>More</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar