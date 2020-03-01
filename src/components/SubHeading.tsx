import React from 'react';
import styled from 'styled-components';

const SubHeadingText = styled.h3`
    color: #aaaaaa;
    margin-bottom: 1%;
    padding-top: 3%;
    text-align: center;
`;

export const SubHeading = ({ text }: { text: string}) => (
    <SubHeadingText>{text}</SubHeadingText>
)