"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { api } from "@/data/api";
import { techsTypes } from "@/data/types/techs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowsProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

async function getTechs() {
  const response = await api("/techs");
  const techs = await response.json();
  return techs;
}

function PrevArrow(props: ArrowsProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{
        ...style,
        width: "12px",
        height: "20px",
        backgroundColor: "rgba(0,0,0,0)",
      }}
      onClick={onClick}
      src={"/arrow-left.png"}
      alt={"arrowLeft"}
      width={12}
      height={20}
    />
  );
}
function NextArrow(props: ArrowsProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{
        ...style,
        width: "12px",
        height: "20px",
        backgroundColor: "rgba(0,0,0,0)",
      }}
      onClick={onClick}
      src={"/arrow-right.png"}
      alt={"arrowRight"}
      width={24}
      height={40}
    />
  );
}

const DynamicCarousel = () => {
  const [techs, setTechs] = useState<techsTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const techsData = await getTechs();
      setTechs(techsData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const settings = {
    focusOnSelect: true,
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "160px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          className: "center",
          centerMode: true,
          infinite: false,
          centerPadding: "160px",
          slidesToShow: 1,
          speed: 500,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          dots: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "100px",
        },
      },
    ],
  };

  return (
    <div id="carousel">
      <h3 className="text-2xl pt-6 md:pt-14 pl-12 pb-6 md:pl-24">
        Tecnologias
      </h3>
      <div className="mx-auto max-w-[480px]">
        {loading ? (
          <div className="flex flex-row w-[480px] h-[150px]">
            <div
              className={`mx-auto rounded-lg flex flex-col items-center justify-around drop-shadow-md bg-violet-600 opacity-3 animate-pulse w-[70px] h-[88px]`}
            ></div>
            <div
              className={`mx-auto rounded-lg flex flex-col items-center justify-around drop-shadow-md bg-[#660099] animate-pulse w-[122px] h-[150px]`}
            ></div>
            <div
              className={`mx-auto rounded-lg flex flex-col items-center justify-around drop-shadow-md bg-violet-600 opacity-3 animate-pulse w-[70px] h-[88px]`}
            ></div>
          </div>
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {techs.map((tech: techsTypes) => {
                return (
                  <div key={tech.id}>
                    <div
                      className={`mx-auto rounded-lg flex flex-col items-center justify-around drop-shadow-md cursor-pointer`}
                    >
                      <p className="text-white">{tech.title}</p>
                      <div>
                        <Image
                          src={tech?.urlImage}
                          alt={tech?.title}
                          width={tech?.width}
                          height={tech?.height}
                          quality={100}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicCarousel;
