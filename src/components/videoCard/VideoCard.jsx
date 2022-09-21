import React from 'react';
import image from "../../images/IMG.png";
import icon from "../../images/Icons.png";
import './VideoCard.css';
const VideoCard = () => {
    return (
        <section className="video-card">
            <div className="serial-no">01</div>
            <div className="video-card-content">
                <img src={image} alt="" />
                <h4>Rune raises $100,000 for marketing through NFT butterflies sale</h4>
            </div>
            <div className="author">Amir</div>
            <div className="like-count">259 <img src={icon} alt="" /></div>
        </section>
    );
};

export default VideoCard;