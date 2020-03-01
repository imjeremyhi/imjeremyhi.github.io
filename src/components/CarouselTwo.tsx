import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles.js';

export const Slider = ({projects}: any) => (
  <AwesomeSlider>
      {
          projects.map(({imgSrc}: any) => (
            <div data-src={imgSrc} />
          ))
      }
  </AwesomeSlider>
);