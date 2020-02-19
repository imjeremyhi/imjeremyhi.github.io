import React from 'react';
import styled from 'styled-components';

const HeadingText = styled.h1`
    text-align: center;
    color: #aaaaaa; 
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const Heading = ({ text }: { text: string}) => (
    <HeadingText className="hideme">{text}</HeadingText>
)