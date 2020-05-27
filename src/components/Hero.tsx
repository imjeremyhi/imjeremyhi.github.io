import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { DownArrow } from './DownArrow';

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

const HeroVideo = styled.video`
    height: auto;
    vertical-align: middle;
    width: 100%;
`;

const Row = styled.div`
    width: 100%;
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

const OverlayContent: any = styled.div`
    height: ${({ innerWidth }: any) => {
        if (innerWidth < 1000) {
            return '80%';
        } else if (innerWidth < 1500) {
            return '50%';
        } else {
            return '40%';
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
`;

interface Props {
    divToScroll: any;
};

interface State {
    showTitle: boolean,
    showSubtitle: boolean,
    showTagline: boolean,
    showDownArrow: boolean,
};

const getTypedText = (shouldShow: boolean, text: string, Style: any, { isSmallWindow }: any) => {
    return (
        <Row>
            <Style isSmallWindow={isSmallWindow}>
                { shouldShow ? 
                    <Typist cursor={{ hideWhenDoneDelay: 0, hideWhenDone: true }}>
                        {text}
                    </Typist> : <span style={{ opacity: 0}}>Empty text</span>
                }
            </Style>
        </Row>
    );
}

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

        return !!userAgent.match(/(iPhone|Android)/i) || innerWidth < 700;
    }

    setTimeouts = () => {
        setTimeout(() => {
            this.setState({
                showTitle: true,
            });
        }, 3100);
        setTimeout(() => {
            this.setState({
                showSubtitle: true,
            });
        }, 4100);
        setTimeout(() => {
            this.setState({
                showTagline: true,
            });
        }, 6100);
        setTimeout(() => {
            this.setState({
                showDownArrow: true,
            });
        }, 9500);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        const { divToScroll } = this.props;
        const { showTitle, showSubtitle, showTagline, showDownArrow } = this.state;

        const { innerWidth } = window;
        const isSmallWindow = this.isSmallWindow();

        return (
            <HeroWrapper id="home">
                <HeroVideo id="video" playsinline autoPlay muted onPlay={() => this.setTimeouts()}>
                    <source src={video} type="video/mp4" />
                </HeroVideo>
                <Overlay>
                    <OverlayContent innerWidth={innerWidth}>
                        {getTypedText(showTitle, 'Jeremy Fu', Title, { isSmallWindow })}
                        {getTypedText(showSubtitle, 'I am a: developer', Subtitle, { isSmallWindow })}
                        {getTypedText(showTagline, 'Welcome! Check out some of my work below :)', SmallTagline, { isSmallWindow })}
                        <Row>
                            <DownArrow isSmallWindow={isSmallWindow} divToScroll={divToScroll} showDownArrow={showDownArrow} />
                        </Row>
                    </OverlayContent>
                </Overlay>
            </HeroWrapper>
        );
    }
}