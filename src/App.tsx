import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Social } from './components/Social';
import { Languages } from './components/Languages';

const Main = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #EDF1F5;
`;

interface Props {
};

interface State {};

export class App extends Component<Props, State> {
    divToScroll: any;

    constructor(props: Props) {
        super(props);

        this.divToScroll = React.createRef();
    }

    render() {
        return (
            <Main>
            <NavBar />
            <Hero divToScroll={this.divToScroll} />
            <Projects divToScroll={this.divToScroll} />
            <Languages />
            {/* <About /> */}
            {/* <Contact /> */}
            <Footer />
            <Social />
            </Main>
        );
    }
}
