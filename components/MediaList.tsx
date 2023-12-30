"use client";
import MovieCard from "./MovieCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { CustomArrow } from "./CustomArrow";


const MediaList = ({ header, expand, results, type }: any) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    prevArrow: <CustomArrow className="slick-prev" direction="left" />,
    nextArrow: <CustomArrow className="slick-next" direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="z-10 mt-10">
      <div className="flex justify-between mx-5">
        <div className="ml-5 text-2xl font-medium">{header}</div>
        <Link href={expand ? expand : "#"}>
          <Button size="sm" variant="flat" className="mr-5">
            More
          </Button>
        </Link>
      </div>

      <div className="h-max">
        <Slider {...settings} className="mx-2">
          {results.map((result: any) => (
            <MovieCard result={result} key={result.id} type={type}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MediaList;
