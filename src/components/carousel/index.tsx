"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../../public/arrow-left.png";
import arrowRight from "../../../public/arrow-right.png";
import imageSIMCard from "../../../public/card-icon-simcard.png";
import imageEsim from "../../../public/card-icon-esim.png";
import image5G from "../../../public/card-icon-5g.png";

function NextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{ ...style, display: "block", width: "auto", height:"auto" }}
      onClick={onClick} src={arrowRight} alt={"arrowRight"}    />
  );
}

function PrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{ ...style, display: "block", width: "auto", height:"auto" }}
      onClick={onClick} src={arrowLeft} alt={"arrowRight"}    />
  );
}

const Arrow: React.FC<{ className: string; style: React.CSSProperties; onClick: React.MouseEventHandler<HTMLDivElement>; src: string; alt: string; width: number; height: number }> = ({ className, style, onClick, src, alt, width, height }) => (
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
    centerPadding: "10px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />,    
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

  const Card: React.FC<{ title: string; src: any; alt: string; width: number; height: number }> = ({ title, src, alt, width, height }) => (
    <div className="w-[160px] h-[200px] bg-[#660099] rounded-lg flex flex-col items-center justify-around">
      <p className="text-white text-lg">{title}</p>
      <div>
        <Image src={src} alt={alt} width={width} height={height} quality={100} />
      </div>
    </div>
  );
  

  return (
    <div>
      <h3 className="text-2xl pt-6 md:pt-14 pl-12 pb-6 md:pl-24">Tecnologias</h3>
      <div className="mx-auto max-w-[600px]">
        <Slider {...settings} className="slider-container">
          <Card title="simCard" src={imageSIMCard} alt="imageSIMCard" width={46} height={38} />
          <Card title="Esim" src={imageEsim} alt="imageEsim" width={52} height={48} />
          <Card title="5G" src={image5G} alt="image5G" width={25} height={20} />
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
