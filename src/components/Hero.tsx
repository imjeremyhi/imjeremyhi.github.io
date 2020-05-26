import React, { Component } from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import Typist from 'react-typist';

const swan = './resources/swan.jpg';
const video = './resources/personal-website-video.mp4';

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

const DownArrow: any = styled.img`
    border-radius: 50%;
    height: ${({ isSmallWindow }: any) => isSmallWindow ? '40px' : '80px'};
    width: ${({ isSmallWindow }: any) => isSmallWindow ? '40px' : '80px'};
`;

const Title: any = styled.div`
    font-size: ${({ isSmallWindow }: any) => isSmallWindow ? '2em' : '4em'};
`;

const Subtitle: any = styled.div`
    font-size: ${({ isSmallWindow }: any) => isSmallWindow ? '1.5em' : '2.5em'};
    margin-bottom: 10px;
`;

const SmallTagline: any = styled.div`
    font-size: ${({ isSmallWindow }: any) => isSmallWindow ? '10px' : '15px'};
    margin-bottom: 10px;
`;

const OverlayContent = styled.div`
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
`;

interface Props {};

interface State {
    showTitle: boolean,
    showSubtitle: boolean,
    showTagline: boolean,
    showDownArrow: boolean,
};

export class Hero extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showTitle: false,
            showSubtitle: false,
            showTagline: false,
            showDownArrow: false,
        };
    }

    resize = () => this.forceUpdate()

    isSmallWindow = () => {
        const { userAgent } = navigator;
        const { innerWidth } = window;

        return userAgent.match(/(iPhone|Android)/i) || innerWidth < 650;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showTitle: true,
            });
        }, 3000);
        setTimeout(() => {
            this.setState({
                showSubtitle: true,
            });
        }, 4000);
        setTimeout(() => {
            this.setState({
                showTagline: true,
            });
        }, 6000);
        setTimeout(() => {
            this.setState({
                showDownArrow: true,
            });
        }, 9800);

        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        const { showTitle, showSubtitle, showTagline, showDownArrow } = this.state;

        return (
            <HeroWrapper id="home">
                <HeroVideo id = "video" playsinline autoPlay muted>
                    <source src={video} type="video/mp4" />
                </HeroVideo>
                <Overlay>
                    <OverlayContent>
                        {  showTitle ? 
                            <Row>
                                <Title isSmallWindow={this.isSmallWindow()}>
                                    <Typist cursor={{ hideWhenDoneDelay: 0, hideWhenDone: true }}>
                                        Jeremy Fu
                                    </Typist>
                                </Title>
                            </Row> 
                            : null
                        }
                        { showSubtitle ? 
                            <Row>
                                <Subtitle isSmallWindow={this.isSmallWindow()}>
                                    <Typist cursor={{ hideWhenDoneDelay: 0, hideWhenDone: true }}>
                                        I am a: developer
                                    </Typist>
                                </Subtitle>
                            </Row> : null
                        }
                        { showTagline ? 
                            <Row>
                                <SmallTagline isSmallWindow={this.isSmallWindow()}>
                                    <Typist cursor={{ hideWhenDoneDelay: 0, hideWhenDone: true }}>
                                        Welcome! Check out some of my work below :)
                                    </Typist>
                                </SmallTagline>
                            </Row> : null
                        }
                        { showDownArrow ?
                            <Row id="godown">
                                <DownArrow src="resources/down-arrow.png" alt="Down arrow" isSmallWindow={this.isSmallWindow()} />
                            </Row> : null
                        }
                    </OverlayContent>
                </Overlay>
            </HeroWrapper>
        );
    }
}