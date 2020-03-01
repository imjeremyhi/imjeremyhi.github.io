import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.footer`
    background-color: #2f2f2f;
    width: 100%;
    color: #ffffff;
    text-align: center;
    margin-top: 50px;
`;

const Author = styled.div`
    padding: 30px;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Author>
                &copy; Jeremy Fu 2020
            </Author>
        </Wrapper>
    );
}