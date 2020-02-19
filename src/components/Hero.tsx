import React, { Component } from 'react';
import styled from 'styled-components'
const swan = './resources/swan.jpg';

/**
 *     max-width: 100%;
    background-size: cover;
    overflow: hidden;
 */
const HeroWrapper = styled.div`
    position: relative;  
`;

const DownArrow = styled.img`
    border-radius: 50%;
    height: 80px;
    width: 80px;
`;

export class Hero extends Component {
    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            <HeroWrapper>
            {
                ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || 
                    (navigator.userAgent.match(/Android/i)) || (window.innerWidth < 650)) ?
                    <div id="vid-container">
                        <img src={swan} />
                    </div>
                    // var home = document.getElementById("home");
                    // home.style.background="url('./resources/swan.jpg') no-repeat center";
                    // videoElement.parentNode.removeChild(videoElement);
                    // $('#removed').val('0');
                    // $('.hideme').each( function(i){
                    //     $(this).animate({'opacity':'1'},500);
                    // });
                    : 
                    <video id = "video" autoPlay loop>
                        <source src="resources/swan.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src="resources/swan.mp4" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                // } else if (window.innerWidth >= 650) {
                //     var home = document.getElementById("home");
                //     home.style.background="none";
                }
            {/* } */}
                {/* <div id="vid-container">
                    <video id = "video" autoPlay loop>
                        <source src="resources/swan.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src="resources/swan.mp4" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div> */}
                <div className="overlay-desc">
                    <div id="hero-title">Jeremy Fu</div>
                    <div id ="hero-subtitle">
                        <span id="rotate" />
                    </div>
                    <div id="godown">
                        <a href="javascript:;">
                            <DownArrow src="resources/white-down-arrow.png" alt="Down arrow" />
                        </a>
                    </div>
                    <div id="tiny-text"/>
                </div>
            </HeroWrapper>
        );
    }
}