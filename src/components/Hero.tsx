import React from 'react';
import styled from 'styled-components'
const swan = './resources/swan.jpg';

const HeroWrapper = styled.section`
    position: relative;  
    height: 40em; 
    max-width: 100%;
    background: url(${swan}) no-repeat center; 
    background-size: cover;
    overflow: hidden;
`;

const DownArrow = styled.img`
    border-radius: 50%;
    height: 80px;
    width: 80px;
`;

export const Hero = () => {
    return (
        <HeroWrapper id="home">
            <div id="vid-container">
                <video id = "video" autoPlay loop>
                    <source src="resources/swan.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    <source src="resources/swan.mp4" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>
            <div className="vidcover">
                <div id="hero-title">Jeremy Fu</div>
                <div id ="hero-subtitle">
                    <span id="rotate" />
                </div>
                <div id="godown">
                    <a href="javascript:;">
                        <DownArrow src="resources/downarrow.PNG" alt="Down arrow" />
                    </a>
                </div>
                <div id="tiny-text"/>		        
            </div>
        </HeroWrapper>
    );
}