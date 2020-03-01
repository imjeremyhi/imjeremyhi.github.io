import React from 'react';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
    text-align: center;
    padding-top: 60px;
`;

export const Section = ({ id, children }: { id: string, children: JSX.Element }) => (
    <SectionWrapper id={id}>
        {children}
    </SectionWrapper>
)