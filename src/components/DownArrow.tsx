import React from 'react';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';

interface Props {
    isSmallWindow: boolean,
    divToScroll: any,
    showDownArrow: boolean,
};

const Down: any = styled(animated.img)`
    border-radius: 50%;
    height: ${({ isSmallWindow }: any) => isSmallWindow ? '40px' : '80px'};
    width: ${({ isSmallWindow }: any) => isSmallWindow ? '40px' : '80px'};
`;

export const DownArrow = ({ isSmallWindow, divToScroll, showDownArrow }: Props) => {
    const [, setY] = useSpring(() => ({ y: 0 }));
    const opacityProps = useSpring({opacity: 1, from: {opacity: 0}})

    const emptyDown = <Down isSmallWindow={isSmallWindow} style={{ opacity: 0 }} />;
    const customDown = <Down 
        src="resources/down-arrow.png" 
        alt="Down arrow" 
        isSmallWindow={isSmallWindow} 
        onClick={() => {
            setY({
                // Div is a bit lower then where we want to scroll to
                y: divToScroll.current.offsetTop - 70,
                reset: true,
                from: { y: window.scrollY },
                // @ts-ignore
                onFrame: props => window.scroll(0, props.y)
            })
        }}
        style={opacityProps}
    />

    return showDownArrow ? customDown : emptyDown;
}
