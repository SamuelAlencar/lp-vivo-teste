"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../../public/arrow-left.png";
import arrowRight from "../../../public/arrow-right.png";
import imageSIMCard from "../../../public/card-icon-simcard.png";
import imageEsim from "../../../public/card-icon-esim.png";
import image5G from "../../../public/card-icon-5g.png";

function NextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{ ...style, display: "block", width: "auto", right: "10px", height: "auto", zIndex:"49" }}
      onClick={onClick}
      src={arrowRight}
      alt={"arrowRight"}
    />
  );
}

function PrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{ ...style, display: "block", left: "10px", width:"auto", height: "auto", zIndex:"49"  }}
      onClick={onClick}
      src={arrowLeft}
      alt={"arrowRight"}
    />
  );
}

const Arrow: React.FC<{
  className: string;
  style: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ className, style, onClick, src, alt, width, height }) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <Image src={src} alt={alt} width={width} height={height} quality={100} />
  </div>
);

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "150px",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 2,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "140px",
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "140px",
          className: "center",
          centerMode: true,          
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "100px",
          dots: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Card: React.FC<{
    title: string;
    src: any;
    alt: string;
    width: number;
    height: number;
  }> = ({ title, src, alt, width, height }) => (
    <div className="w-[70px] h-[88px] bg-[#660099] bg-opacity-30 rounded-lg flex flex-col items-center justify-around drop-shadow-md">
      <p>{title}</p>
      <div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={100}
        />
      </div>
    </div>
  );

  return (
    <div id="carousel">
      <h3 className="text-2xl pt-6 md:pt-14 pl-12 pb-6 md:pl-24">
        Tecnologias
      </h3>
      <div className="mx-auto max-w-[480px]">
        <Slider {...settings} className="slider-container">
          <Card
            title="simCard"
            src={imageSIMCard}
            alt="imageSIMCard"
            width={46}
            height={38}
          />
          <Card
            title="Esim"
            src={imageEsim}
            alt="imageEsim"
            width={52}
            height={48}
          />
          <Card title="5G" src={image5G} alt="image5G" width={25} height={20} />
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
