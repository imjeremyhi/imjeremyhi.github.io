import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles.js';

export const Slider = ({projects}: any) => (
  <AwesomeSlider>
      {
          projects.map(({imgSrc, altText}: any) => (
            <div data-src={imgSrc} key={altText} />
          ))
      }
  </AwesomeSlider>
);