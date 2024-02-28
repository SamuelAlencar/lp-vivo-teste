"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSIMCard from "../../../public/card-icon-simcard.png";
import imageEsim from "../../../public/card-icon-esim.png";
import image5G from "../../../public/card-icon-5g.png";
import arrowLeft from "../../../public/arrow-left.png";
import arrowRight from "../../../public/arrow-right.png";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src={arrowRight}
        alt="arrowRight"
        width={12}
        height={20}
        quality={100}
      />
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src={arrowLeft}
        alt="arrowLeft"
        width={12}
        height={20}
        quality={100}
      />
    </div>
  );
}

const Carousel = () => {
  const settings = {
    className: "center ",
    centerMode: true,
    centerPadding: "10px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div >
      <h3 className="text-2xl pt-6 md:pt-14 pl-12 pb-6 md:pl-24"  >Tecnologias</h3>
      <div className="mx-auto max-w-[600px]">
        <Slider {...settings} className="slider-container">
          <div>
            <div className="w-[160px] h-[200px] bg-[#660099] rounded-lg flex flex-col items-center justify-around">
              <p className="text-white text-lg">simCard</p>
              <div>
                <Image
                  src={imageSIMCard}
                  alt="imageSIMCard"
                  width={46}
                  height={38}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="w-[160px] h-[200px] bg-[#660099] rounded-lg flex flex-col items-center justify-around">
              <p className="text-white text-lg">Esim</p>
              <div>
                <Image
                  src={imageEsim}
                  alt="imageEsim"
                  width={52}
                  height={48}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="w-[160px] h-[200px] bg-[#660099] rounded-lg flex flex-col items-center justify-around">
              <p className="text-white text-lg">5G</p>
              <div>
                <Image
                  src={image5G}
                  alt="image5G"
                  width={25}
                  height={20}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
