import React, { Component } from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
const swan = './resources/swan.jpg';

const HeroWrapper = styled.div`
    position: relative;
`;

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.1);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    color: #ffffff;
`;

const HeroImg = styled.img`
    max-width: 100%;
`;

const HeroVideo = styled.video`
    height: auto;
    vertical-align: middle;
    width: 100%;
`;

const Row = styled.div`
    width: 100%;
`;

const DownArrow = styled.img`
    border-radius: 50%;
    height: 80px;
    width: 80px;
`;

const Title = styled.div`
    font-size: 4em;
`;

const Subtitle = styled.div`
    font-size: 2.5em;
`;

const SmallTagline = styled.div`
    height: 21px;
    font-size:15px;
`;

const OverlayContent = styled.div`
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
`;

export class Hero extends Component {
    resize = () => this.forceUpdate()

    isSmallWindow = () => {
        const { userAgent } = navigator;
        const { innerWidth } = window;

        return userAgent.match(/(iPhone|Android)/i) || innerWidth < 650;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            <HeroWrapper id="home">
                { 
                    this.isSmallWindow() ?
                    <HeroImg src={swan} alt="swan" /> : 
                    <HeroVideo id = "video" autoPlay loop>
                        <source src="resources/swan.mp4" type="video/mp4" />
                    </HeroVideo>
                }
                <Overlay>
                    <OverlayContent>
                        <Row>
                            <Title>Jeremy Fu</Title>
                        </Row>
                        <Row>
                            <Subtitle>
                                <Typed
                                    strings={["I am a:^500 developer"]}
                                    typeSpeed={40}
                                    showCursor={false}
                                />
                            </Subtitle>
                        </Row>
                        <Row id="godown">
                            <DownArrow src="resources/down-arrow.png" alt="Down arrow" />
                        </Row>
                        <Row>
                            <SmallTagline>
                                <Typed
                                    strings={["^2000 Welcome! Check out some of my work below :)"]}
                                    typeSpeed={40}
                                    showCursor={false}
                                />
                            </SmallTagline>
                        </Row>
                    </OverlayContent>
                </Overlay>
            </HeroWrapper>
        );
    }
}