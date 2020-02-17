import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.footer`
    background-color: #2f2f2f;
    bottom: 0;
    position: relative;
    width: 100%;
`;

const Author = styled.p`
    color: #ffffff;
    padding-top: 5%;
    text-align: center;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <Author>
                    &copy; Jeremy Fu 2016
                </Author>
            </div>
        </Wrapper>
    );
}