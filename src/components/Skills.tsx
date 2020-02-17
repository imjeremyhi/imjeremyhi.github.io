import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { Section } from './Section';

const CenteredText = styled.div`
    text-align: center;
`;

const WhiteText = styled.span`
    color: #ffffff;
`;

const SkillColumn = ({ colHeading, colRows }: { colHeading: string, colRows: Array<string> }) => (
    <CenteredText className="col-xs-4">
        <button className="animbox animbox-icon hideme">
            <WhiteText className="hideme">{colHeading}</WhiteText>
        </button>
        {
            colRows.map(text => (
                <p className="hideme" key={text}>{text}</p>
            ))
        }
    </CenteredText>
);

export const Skills = () => {
    return (
        <Section id="about">
            <>
                <Heading text="Programming Knowledge" />
                <div style={{ marginTop: "6%" }}>
                    <SkillColumn colHeading="WEB" colRows={["HTML & CSS & Jquery", "NodeJS & ReactJS", "Wordpress"]} />
                    <SkillColumn colHeading="MOBILE" colRows={["Android Development with Java", "iOS Development with Swift"]} />
                    <SkillColumn colHeading="SOFTWARE" colRows={["C & Java"]} />
                </div>
            </>
        </Section>
    );
}