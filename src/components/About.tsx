import React from 'react';
import { Spring } from "react-spring/renderprops";
import styled from 'styled-components';
import { Heading } from './Heading';
import { Section } from './Section';
import VisibilitySensor from "./VisibilitySensor";

const ColumnThird = styled.div`
    min-height: 1px;
    width: 30%;
`;

const Spacing = styled.div`
    padding-top: 15px;
`;

const LargerSpacing = styled.div`
    padding-top: 30px;
`;

const AboutContainer = styled.div`
    width: 80%;
    margin: auto;
`;

const SkillHeadingBox = styled.div`
    background: #9A8E5E;
    text-align: center;
    padding: 17px 0;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
`;

const SkillsGrouping = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    margin-top: 50px;
`;

const SkillColumn = ({ colHeading, colRows }: { colHeading: string, colRows: Array<string> }) => (
    <ColumnThird>
        <SkillHeadingBox>
            {colHeading}
        </SkillHeadingBox>
        <Spacing />
        {
            colRows.map(text => (
                <p key={text}>{text}</p>
            ))
        }
    </ColumnThird>
);

export const About = () => (
    <VisibilitySensor once>
        {({ isVisible }: any) => (
            <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => 
                    <Section id="about">
                        <div style={{ opacity }}>
                            <Heading text="About" />
                            <LargerSpacing />
                            <AboutContainer>
                            <p>
                                I'm a software engineer that has worked at well known companies such as Facebook and Atlassian. I have worked in front-end, back-end and platform roles. I spent my university days as an academic tutor and actively involved in the freelance space, helping university students get their start up ideas up and running. I'm willing to take on a wide range of different projects. If there's something you think I can help you with - please leave a message in the contact section.
                            </p>
                            </AboutContainer>
                            <SkillsGrouping>
                                <SkillColumn colHeading="Web" colRows={["HTML, CSS & Jquery", "ExpressJS & ReactJS", "Wordpress"]} />
                                <SkillColumn colHeading="Mobile" colRows={["Android Development with Java", "iOS Development with Swift"]} />
                                <SkillColumn colHeading="Software" colRows={["Python", "NodeJS", "Java"]} />
                            </SkillsGrouping>
                        </div>
                    </Section>
                }
            </Spring>

        )}
    </VisibilitySensor>
);