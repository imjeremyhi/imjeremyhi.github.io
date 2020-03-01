import React, { Component } from "react";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const leftArrow = './resources/left-arrow.png';
const rightArrow = './resources/right-arrow.png';

type Props = {
  projects: any,
  isWeb: boolean,
};

const ArrowImg = styled.img`
  display: block;
  height: 80px;
  width: 80px;
`;

const ProjectText = styled.div`
  &:hover: {
    background: rgba(0, 0, 0, .6);
    text-align: center;
    margin: auto;
    font-size:1.2em;
    color: #ffffff;
    content: "Hello"
  }
`;

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height: "80px", width: "80px" }}
      onClick={onClick}
    >
      <ArrowImg src={leftArrow} alt={"Left arrow"} />
    </div>
  );
}

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height: "80px", width: "80px" }}
      onClick={onClick}
    >
      <ArrowImg src={rightArrow} alt={"Right arrow"} />
      </div>
  );
}

const ProjectImg: any = styled.img`
  margin: auto;
  height: ${(props: any) => props.isWeb ? "30vh" : null};
  width: ${(props: any) => props.isWeb ? "60vh" : null};
  &:hover: {
    background: rgba(0, 0, 0, .6);
    text-align: center;
    margin: auto;
    font-size:1.2em;
    color: #ffffff;
    content: "Hello"
  }
`;

const ProjectContainer = ({url, imgSrc, layoverText, altText, isWeb}: {url: string, imgSrc: string, layoverText: string, altText: string, isWeb: boolean})  => (
  <a href={url} target="_blank" rel="noopener noreferrer">
      <ProjectText>
          <ProjectImg src={imgSrc} alt={altText} isWeb={isWeb} />
        {/* <div className="after">{layoverText}</div> */}
      </ProjectText>
  </a>
);

export class ProjectCarousel extends Component<Props> {
  render() {
    const { isWeb } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // responsive: [
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   }
      // ]
    };

    return (
      <div>
        <Slider {...settings}>
          {
            this.props.projects.map(({url, imgSrc, layoverText, altText}: any) => (
              <ProjectContainer url={url} imgSrc={imgSrc} layoverText={layoverText} altText={altText} key={altText} isWeb={isWeb} />
            ))
          }
        </Slider>
      </div>
    );
  }
}