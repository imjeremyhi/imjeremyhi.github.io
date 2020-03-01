import React, { Component } from 'react';
import { Spring } from "react-spring/renderprops";
import styled from 'styled-components';
import { ContactForm } from './ContactForm';
import { Heading } from './Heading';
import { Map } from './Map';
import { Section } from './Section';
import VisibilitySensor from "./VisibilitySensor";

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
`;

const MapContainer = styled.div`
    height: 50vh;
    width: 40%;
`;

const FormContainerSmall = styled.div`
    width: 50%;
`;

const FormContainerLarge = styled.div`
    width: 80%
`;

export class Contact extends Component {
    resize = () => this.forceUpdate()

    isSmallWindow = () => {
        const { userAgent } = navigator;
        const { innerWidth } = window;

        return userAgent.match(/(iPhone|Android)/i) || innerWidth < 1100;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            <VisibilitySensor once>
                {({ isVisible }: any) => (
                    <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
                        {({ opacity }) => 
                            <Section id="contact">
                                <div style={{ opacity }}>
                                    <Heading text="Contact" />
                                    <ContactContainer>
                                        {
                                            // Throws an error if client is not connected to the internet
                                            !this.isSmallWindow() && window.navigator.onLine  &&
                                            <MapContainer>
                                                <Map />
                                            </MapContainer>
                                        }
                                        {
                                            this.isSmallWindow() ? 
                                            <FormContainerLarge>
                                                <ContactForm />
                                            </FormContainerLarge> :
                                            <FormContainerSmall>
                                                <ContactForm />
                                            </FormContainerSmall>
                                        }
                                    </ContactContainer>
                                </div>
                            </Section>
                        }
                    </Spring>
                )}
            </VisibilitySensor>
        );
    }
};