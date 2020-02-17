import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { Section } from './Section';
import { SubHeading } from './SubHeading';

const ProjectCategory = styled.div`
    clear: both;
`;

const ProjectContainer = ({url, imgSrc, layoverText, altText}: {url: string, imgSrc: string, layoverText: string, altText: string})  => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={altText} />
        <div className="after" style={{ paddingLeft: "20%", paddingRight: "20%" }}>{layoverText}</div>
    </a>
);

const PhoneContainer = ({url, imgSrc, layoverText, altText}: {url: string, imgSrc: string, layoverText: string, altText: string}) => (
    <div className="image-phone-container">
        <ProjectContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} />
    </div>
);

const WebsiteContainer = ({url, imgSrc, layoverText, altText}: {url: string, imgSrc: string, layoverText: string, altText: string}) => (
    <div className="image-container">
        <ProjectContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} />
    </div>
);

const websiteData = [
    {
        url: "http://businessoneconsulting.org/",
        imgSrc: "resources/businessone.PNG",
        layoverText: "BUSINESSONE CONSULTING UNSW",
        altText: "UNSW BusinessOne website",
    },
    {
        url: "http://www.gowntown.com.au/cufflinks/",
        imgSrc: "resources/gowntown.PNG",
        layoverText: "GOWNTOWN",
        altText: "Gowntown website",
    },
    {
        url: "http://unswbsoc.com/",
        imgSrc: "resources/bsoc.PNG",
        layoverText: "BUSINESS SOCIETY UNSW",
        altText: "UNSW business society website",
    },
    {
        url: "",
        imgSrc: "resources/worldhax.PNG",
        layoverText: "WORLDHAX BLOG Site No Longer Running",
        altText: "Life blog website",
    },
    {
        url: "http://kiyobox.storenvy.com/",
        imgSrc: "resources/kiyo.PNG",
        layoverText: "KIYO BOX",
        altText: "Cosmetics website",
    },
    {
        url: "https://www.alphatime.co/",
        imgSrc: "resources/alpha.PNG",
        layoverText: "ALPHA TIME",
        altText: "Dating coaching website",
    },
    {
        url: "https://internationalaom.com/",
        imgSrc: "resources/piano.PNG",
        layoverText: "INTERNATIONAL AOM",
        altText: "Piano teaching website",
    }
];

const appData = [
    {
        url: "https://itunes.apple.com/in/app/pocket-journal/id1078544961?mt=8",
        imgSrc: "resources/journal.png",
        layoverText: "POCKET JOURNAL",
        altText: "Journal app",
    },
    {
        url: "https://itunes.apple.com/in/app/night-fx/id1083457773?mt=8",
        imgSrc: "resources/nightfx.png",
        layoverText: "NIGHT FX",
        altText: "Nightfx app",
    }
];

export const Projects = () => (
    <Section id="project">
        <>
            <Heading text="Projects" />
            
            <ProjectCategory>
                <SubHeading text="Websites" />
                {
                    websiteData.map(({url, imgSrc, layoverText, altText}) => (
                        <WebsiteContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} key={altText} />
                    ))
                }
            </ProjectCategory>
            <ProjectCategory>
                <SubHeading text="Mobile apps" />
                {
                    appData.map(({url, imgSrc, layoverText, altText}) => (
                        <PhoneContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} key={altText} />
                    ))
                }
            </ProjectCategory>
        </>
    </Section>
);