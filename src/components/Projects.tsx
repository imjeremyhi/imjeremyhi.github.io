import React from 'react';
import { Spring } from "react-spring/renderprops";
import styled from 'styled-components';
import { Slider } from './Carousel';
import { Heading } from './Heading';
import { Section } from './Section';
import { SubHeading } from './SubHeading';
import VisibilitySensor from "./VisibilitySensor";

interface Props {
    divToScroll: any;
};

interface State {};

const ProjectCategory = styled.div`
    clear: both;
`;

const websiteData = [
    {
        url: "https://internationalaom.com/",
        imgSrc: "./resources/piano.png",
        layoverText: "INTERNATIONAL AOM",
        altText: "Piano teaching website",
    },
    {
        url: "http://kiyobox.storenvy.com/",
        imgSrc: "./resources/kiyo.png",
        layoverText: "KIYO BOX",
        altText: "Cosmetics website",
    },
    {
        url: "https://www.alphatime.co/",
        imgSrc: "./resources/alpha.png",
        layoverText: "ALPHA TIME",
        altText: "Dating coaching website",
    },
    {
        url: "http://businessoneconsulting.org/",
        imgSrc: "./resources/businessone.png",
        layoverText: "BUSINESSONE CONSULTING UNSW",
        altText: "UNSW BusinessOne website",
    },
    {
        url: "http://unswbsoc.com/",
        imgSrc: "./resources/bsoc.png",
        layoverText: "BUSINESS SOCIETY UNSW",
        altText: "UNSW business society website",
    },
    {
        url: "",
        imgSrc: "./resources/worldhax.png",
        layoverText: "WORLDHAX BLOG Site No Longer Running",
        altText: "Life blog website",
    },
    {
        url: "http://www.gowntown.com.au/cufflinks/",
        imgSrc: "./resources/gowntown.png",
        layoverText: "GOWNTOWN",
        altText: "Gowntown website",
    }
];

const appData = [
    {
        url: "https://itunes.apple.com/in/app/pocket-journal/id1078544961?mt=8",
        imgSrc: "./resources/journal.png",
        layoverText: "POCKET JOURNAL",
        altText: "Journal app",
    },
    {
        url: "https://itunes.apple.com/in/app/night-fx/id1083457773?mt=8",
        imgSrc: "./resources/nightfx.png",
        layoverText: "NIGHT FX",
        altText: "Nightfx app",
    }
];

const WebProjects = () => (
    <VisibilitySensor once>
        {({ isVisible }: any) => (
            <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) =>
                    <ProjectCategory style={{ opacity }}>
                        <SubHeading text="Websites" />
                        <Slider projects={websiteData} />
                    </ProjectCategory>
                }
            </Spring>
        )}
    </VisibilitySensor>
)

const MobileProjects = () => (
    <VisibilitySensor once>
        {({ isVisible }: any) => (
            <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) =>
                    <ProjectCategory style={{ opacity }}>
                        <SubHeading text="Mobile apps" />
                        <Slider projects={appData} />
                    </ProjectCategory>
                }
            </Spring>
        )}
    </VisibilitySensor>
)

export const Projects = ({ divToScroll } : Props) => (
    <Section id="projects">
        <div ref={divToScroll}>
            <Heading text="Projects" />
            <WebProjects />
            <MobileProjects />
        </div>
    </Section>
);
