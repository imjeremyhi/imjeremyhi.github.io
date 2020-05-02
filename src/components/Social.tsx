import React from 'react';
import styled from 'styled-components';

const SocialNavbar = styled.div`
    position: fixed;
    bottom: 2%;
    right: 2%; 
    z-index: 2; 
`;

const SocialImg = styled.img`
    height: 40px;
    width: 40px;
`;

const SocialSpacing = styled.a`
    padding: 5px;
`;

const SocialOption = ({ url, imgUrl, altText }: { url: string, imgUrl: string, altText: string}) => (
    <SocialSpacing href={url} target="_blank" rel="noopener noreferrer">
        <SocialImg src={imgUrl} alt={altText} />
    </SocialSpacing>
);

const data = [
    {
        url: "https://github.com/imjeremyhi",
        imgUrl: "resources/github.png",
        altText: "Github link",
    },
    {
        url: "https://au.linkedin.com/in/jeremyfu",
        imgUrl: "resources/linkedin.png",
        altText: "Linkedin link",
    },
    {
        url: "mailto:imjeremyhi@gmail.com",
        imgUrl: "resources/gmail.png",
        altText: "Gmail link",
    },
];

export const Social = () => {
    return (
        <SocialNavbar>
            {
                data.map(({url, imgUrl, altText}) => (
                    <SocialOption url={url} imgUrl={imgUrl} altText={altText} key={altText} />
                ))
            }
        </SocialNavbar>
    );
}