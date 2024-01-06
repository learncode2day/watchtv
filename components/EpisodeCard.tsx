import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

export default function EpisodeCard({ result,current,idx }: any) {
  return (
    <div>
      <Link href={`/tv/${idx}/season/${current}/stream/${result.episode_number}`}>
      <Card className="py-4 m-2 sm:m-6">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">
            Episode {result.episode_number}
          </p>
          <small className="text-default-500">{result.runtime} Mins</small>
          <h4 className="font-medium text-medium">{result.name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={
              result.still_path
                ? `${TMDB_IMAGE_ENDPOINT}${result.still_path}`
                : "/epNotFound.jpg"
            }
            width={270}
          />
        </CardBody>
        <div  className="absolute top-[40%] left-[300px] text-sm text-gray-500 hidden md:block">
            <h2>Synopsis</h2>
            <p>{result.overview}</p>
        </div>
      </Card>
      </Link>
    </div>
  );
}
