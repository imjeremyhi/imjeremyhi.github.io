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
    text-align: center;
    margin: 15px;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <Author>
                    &copy; Jeremy Fu 2020
                </Author>
            </div>
        </Wrapper>
    );
}