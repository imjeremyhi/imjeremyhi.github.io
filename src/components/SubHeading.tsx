import React from 'react';
import styled from 'styled-components';

const SubHeadingText = styled.h3`
    color: #aaaaaa;
    marginBottom: 1%;
    paddingTop: 3%;
`;

export const SubHeading = ({ text }: { text: string}) => (
    <SubHeadingText className="hideme">{text}</SubHeadingText>
)