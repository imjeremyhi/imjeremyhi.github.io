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

export const Languages = () => (
    <VisibilitySensor once>
        {({ isVisible }: any) => (
            <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) =>
                    <Section id="languages">
                        <div style={{ opacity }}>
                            <Heading text="Languages" />
                            <LargerSpacing />
                            <SkillsGrouping>
                                <SkillColumn colHeading="Web" colRows={["HTML, CSS & Jquery", "ExpressJS & ReactJS", "Wordpress"]} />
                                <SkillColumn colHeading="Mobile" colRows={["Android Development with Java", "iOS Development with Swift", "React Native"]} />
                                <SkillColumn colHeading="Software" colRows={["Python, NodeJS", "Java, C++", "SQL"]} />
                            </SkillsGrouping>
                        </div>
                    </Section>
                }
            </Spring>

        )}
    </VisibilitySensor>
);
