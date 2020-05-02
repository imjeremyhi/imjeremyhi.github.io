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

const Main = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #EDF1F5;
`;

export class App extends Component {
    render() {
        return (
            <Main>
            <NavBar />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
            <Social />
            </Main>
        );
    }
}
