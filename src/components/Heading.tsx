import React from 'react';
import styled from 'styled-components';

const HeadingText = styled.h1`
    text-align: center;
    color: #aaaaaa; 
`;

export const Heading = ({ text }: { text: string}) => (
    <HeadingText>{text}</HeadingText>
)