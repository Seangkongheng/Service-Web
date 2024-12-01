import React from 'react'
import "./Collabration.css"
import GoogleImage from "../../assets/google.png"
import Tnw from "../../assets/tnw.png"
import Air from "../../assets/air.png"
import NikeImage from '../../assets/nike.png'
import Phone from "../../assets/phone.png"
import NewsImage from "../../assets/news.png"

const Collabration = () => {
  return (
    <div className='collabration-container'>
        <div className="collabration-content">
            <p>Collabration</p>
            <div className="collabration-list">
                <div className="collabation-item">
                    <img src={GoogleImage} alt="" />
                </div>
                <div className="collabation-item">
                    <img src={Tnw} alt="" />
                </div>
                <div className="collabation-item">
                    <img src={Air} alt="" />
                </div>
                <div className="collabation-item">
                    <img src={NikeImage} alt="" />
                </div>
                <div className="collabation-item">
                    <img src={NewsImage} alt="" />
                </div>
            </div>
            <div className="list-product">
                <div className="prdouct-card">
                    <div className="product-description">
                        <h3>Get Touch with Us</h3><br />
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                        <button>Join Us</button>
                    </div>
                    <div className="product-image">
                       
                    </div>
                </div>
                <div className="prdouct-card">
                <div className="product-description">
                        <h3>Our Project</h3><br />
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                        <button>Join Us</button>
                    </div>
                    <div className="product-image">
                        <img src={Phone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collabration