import React from 'react';
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

const FormContainer = styled.div`
    width: 50%;
`;

export const Contact = () => (
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
                                window.navigator.onLine  &&
                                <MapContainer>
                                    <Map />
                                </MapContainer>
                            }
                            <FormContainer>
                                <ContactForm />
                            </FormContainer>
                        </ContactContainer>
                    </div>
                </Section>
            }
            </Spring>
        )}
    </VisibilitySensor>
);