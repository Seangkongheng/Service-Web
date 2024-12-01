import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-branch">
                <h4>Completed Lab</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus reprehenderit fugiat dolore aperiam tenetur nobis sapiente! Iure pariatur maxime atque necessitatibus? Corrupti velit suscipit voluptas assumenda ab voluptatum nesciunt maxime.</p>
            </div>
            <div className="footer-list">
               <div className="footer-list-item">
                    <h4>Menu</h4>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Technology</li>
                        <li>Case Studies</li>
                        <li>About</li>
                    </ul>
               </div>
               <div className="footer-list-item">
                    <h4>Collabration</h4>
                    <ul>
                        <li>Google</li>
                        <li>Nike</li>
                        <li>Airbnb</li>
                        <li>Tnw</li>
                        <li>IT news</li>
                    </ul>
               </div>
               <div className="footer-list-item">
                    <h4>Contact</h4>
                    <ul>
                        <li>Facebook:</li>
                        <li>Telegram</li>
                        
                    </ul>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer