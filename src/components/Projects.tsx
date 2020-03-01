import React from 'react';
import { Spring } from "react-spring/renderprops";
import styled from 'styled-components';
import { Slider } from './CarouselTwo';
import { Heading } from './Heading';
import { ProjectCarousel } from './ProjectCarousel';
import { Section } from './Section';
// import { Slider } from './Carousel';
import { SubHeading } from './SubHeading';
import VisibilitySensor from "./VisibilitySensor";

const ProjectCategory = styled.div`
    clear: both;
`;

// const ProjectGrouping = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     align-content: center;
// `;

const ProjectContainer = ({url, imgSrc, layoverText, altText}: {url: string, imgSrc: string, layoverText: string, altText: string})  => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={altText} />
        <div className="after">{layoverText}</div>
    </a>
);

// const PhoneContainer = ({url, imgSrc, layoverText, altText}: {url: string, imgSrc: string, layoverText: string, altText: string}) => (
//     <div className="image-phone-container hideme">
//         <ProjectContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} />
//     </div>
// );

// const WebsiteContainer = ({url, imgSrc, layoverText, altText}: {url: string, imgSrc: string, layoverText: string, altText: string}) => (
//     <div className="image-container hideme">
//         <ProjectContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} />
//     </div>
// );

const slideData = [
    {
      index: 0,
      headline: '',
      button: '',
      src: "resources/piano.jpg"
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
  ]

const websiteData = [
    {
        url: "https://internationalaom.com/",
        imgSrc: "resources/piano.png",
        layoverText: "INTERNATIONAL AOM",
        altText: "Piano teaching website",
    },
    {
        url: "http://kiyobox.storenvy.com/",
        imgSrc: "resources/kiyo.png",
        layoverText: "KIYO BOX",
        altText: "Cosmetics website",
    },
    {
        url: "https://www.alphatime.co/",
        imgSrc: "resources/alpha.png",
        layoverText: "ALPHA TIME",
        altText: "Dating coaching website",
    },
    {
        url: "http://businessoneconsulting.org/",
        imgSrc: "resources/businessone.png",
        layoverText: "BUSINESSONE CONSULTING UNSW",
        altText: "UNSW BusinessOne website",
    },
    {
        url: "http://unswbsoc.com/",
        imgSrc: "resources/bsoc.png",
        layoverText: "BUSINESS SOCIETY UNSW",
        altText: "UNSW business society website",
    },
    {
        url: "",
        imgSrc: "resources/worldhax.png",
        layoverText: "WORLDHAX BLOG Site No Longer Running",
        altText: "Life blog website",
    },
    {
        url: "http://www.gowntown.com.au/cufflinks/",
        imgSrc: "resources/gowntown.png",
        layoverText: "GOWNTOWN",
        altText: "Gowntown website",
    }
];

// https://mockuphone.com/iphone7rosegold
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

export const Projects = () => (
    <Section id="project">
        <>
            <Heading text="Projects" />
            <WebProjects />
            <MobileProjects />
            {/* <ProjectCategory>
                <SubHeading text="Websites" />
                <Slider projects={websiteData} />
            </ProjectCategory>
            <ProjectCategory>
                <SubHeading text="Mobile apps" />
                <Slider projects={appData} />
            </ProjectCategory> */}
        </>
    </Section>
);