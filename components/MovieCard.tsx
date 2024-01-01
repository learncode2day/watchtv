import React from "react";
import { Card, Image } from "@nextui-org/react";
import { MotionDiv } from "./MotionDiv";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
import Link from "next/link";
export interface MovieProp {
  release_date: string;
  first_air_date: string;
  title: any;
  poster_path: string;
  vote_average: number;
  media_type: string;
  id:string;
}

type Prop = {
  result: MovieProp;
  type: any;
};

const MovieCard = ({ result,type }: Prop) => {
  const date = result.release_date
    ? result.release_date
    : result.first_air_date;
  return (
    <MotionDiv
      className="flex justify-start m-6 cursor-pointer"
      whileHover={{
        scale: 1.1,
        border:"5px solid white",
        borderRadius:"20px"
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      <Link href={`/${result.media_type ? result.media_type: type}/${result.id}`}>
      <Card isBlurred radius="lg" className="border-none ">
        <Image
          alt="Poster"
          height={200}
          src={
            result.poster_path
              ? `${TMDB_IMAGE_ENDPOINT}${result.poster_path}`
              : "/notfound.jpg"
          }
          width={200}
        />
        
        <p className="absolute z-10 text-[0.6rem] font-semibold m-2 px-1 border-1 border-transparent shadow-sm cursor-pointer backdrop-blur-3xl rounded-md">
          {result.vote_average ? result.vote_average.toFixed(1) : 5.2} ⭐
        </p>
        <p className="absolute right-1 z-10 text-[0.6rem] font-semibold m-2 px-1 border-1 border-transparent shadow-sm cursor-pointer backdrop-blur-3xl rounded-md">
          {date ? date.slice(0, 4) : "2023"}
        </p>
      </Card></Link>
    </MotionDiv>
  );
};

export default MovieCard;
