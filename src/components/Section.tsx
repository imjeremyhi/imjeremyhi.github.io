import React from 'react';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
    padding-bottom: 3%;
`;

export const Section = ({ id, children }: { id: string, children: JSX.Element }) => (
    <SectionWrapper className="container" id={id}>
        {children}
    </SectionWrapper>
)